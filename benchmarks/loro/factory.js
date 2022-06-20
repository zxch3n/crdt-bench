import { AbstractCrdt, CrdtFactory } from "../../js-lib/index"; // eslint-disable-line
import { Loro } from "loro.js";

export const name = "loro";

/**
 * @implements {CrdtFactory}
 */
export class LoroFactory {
  /**
   * @param {function(Uint8Array):void} [updateHandler]
   */
  create(updateHandler) {
    return new LoroCRDT(updateHandler);
  }

  getName() {
    return name;
  }
}

/**
 * @implements {AbstractCrdt}
 */
export class LoroCRDT {
  constructor(updateHandler) {
    this.updateHandler = updateHandler;
    this.doc = new Loro();
    this.versionVector = undefined;
  }

  update() {
    if (this.updateHandler) this.updateHandler(this.saveIncremental());
  }

  saveIncremental() {
    const ans = this.doc.export(this.versionVector);
    this.versionVector = this.doc.getVersionVector();
    return ans;
  }

  /**
   * @return {Uint8Array|string}
   */
  getEncodedState() {
    return this.doc.export();
  }

  /**
   * @param {string} update
   */
  applyUpdate(update) {
    this.doc.import(update);
    this.update();
  }

  // /**
  //  * Insert several items into the internal shared array implementation.
  //  *
  //  * @param {number} index
  //  * @param {Array<any>} elems
  //  */
  // insertArray(index, elems) {
  // }

  // /**
  //  * Delete several items into the internal shared array implementation.
  //  *
  //  * @param {number} index
  //  * @param {number} len
  //  */
  // deleteArray(index, len) {
  // }
  // /**
  //    * @return {Array<any>}
  //    */
  //   getArray() {
  //     return this.doc.materialize(ARRAY_ID);
  //   }

  /**
   * Insert text into the internal shared text implementation.
   *
   * @param {number} index
   * @param {string} text
   */
  insertText(index, text) {
    const container = this.doc.getText("text");
    container.insert(index, text);
    this.update();
  }

  /**
   * Delete text from the internal shared text implementation.
   *
   * @param {number} index
   * @param {number} len
   */
  deleteText(index, len) {
    const container = this.doc.getText("text");
    container.delete(index, len);
    this.update();
  }

  /**
   * @return {string}
   */
  getText() {
    return this.doc.getText("text").getContent();
  }

  /**
   * @param {function (AbstractCrdt): void} f
   */
  transact(f) {
    f(this);
  }

  // /**
  //  * @param {string} key
  //  * @param {any} val
  //  */
  // setMap(key, val) {
  //   if (typeof val === "object") {
  //     this.doc.putObject(MAP_ID, key, val);
  //   } else {
  //     this.doc.put(MAP_ID, key, val);
  //   }
  //   this.update();
  // }

  // /**
  //  * @return {Map<string,any> | Object<string, any>}
  //  */
  // getMap() {
  //   return this.doc.materialize(MAP_ID);
  // }
}
