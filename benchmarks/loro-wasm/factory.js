
import { AbstractCrdt, CrdtFactory } from '../../js-lib/index.js' // eslint-disable-line
import {Loro, LoroList, LoroMap, LoroText, setPanicHook, enableDebug} from 'loro-wasm'
import {readFileSync} from 'fs'
import path from 'path'

export const name = 'loro-wasm'

/**
 * @implements {CrdtFactory}
 */
export class LoroFactory {
  /**
   * @param {function(Uint8Array):void} [updateHandler]
   */
  create (updateHandler) {
    return new LoroWasm(updateHandler)
  }

  getName () {
    return name
  }
}

/**
 * @implements {AbstractCrdt}
 */
export class LoroWasm {
  /**
   * @param {function(Uint8Array):void} [updateHandler]
   */
  constructor (updateHandler) {
    this.doc = new Loro();
    this.version = undefined;
    this.updateHandler = updateHandler;
    if (updateHandler) {
      this.doc.subscribe((/** @type {boolean} */ local) => {
        if (local ) {
          let updates = this.doc.exportUpdates(this.version);
          updateHandler(updates)
          this.version = this.doc.version();
        }
      })
    }
    this.list = this.doc.getList('list')
    this.map = this.doc.getMap('map')
    this.text = this.doc.getText('text')
  }

  /**
   * @return {Uint8Array|string}
   */
  getEncodedState () {
    return this.doc.exportUpdates()
  }

  /**
   * @param {Uint8Array} update
   */
  applyUpdate (update) {
    this.doc.importUpdates(update)
  }

  /**
   * Insert several items into the internal shared array implementation.
   *
   * @param {number} index
   * @param {Array<any>} elems
   */
  insertArray (index, elems) {
    for (let i = 0; i < elems.length; i++) {
      this.list.insert(this.doc, index + i, elems[i])
    }
  }

  /**
   * Delete several items into the internal shared array implementation.
   *
   * @param {number} index
   * @param {number} len
   */
  deleteArray (index, len) {
    this.list.delete(this.doc, index, len);
  }

  /**
   * @return {Array<any>}
   */
  getArray () {
    return this.list.value
  }

  /**
   * Insert text into the internal shared text implementation.
   *
   * @param {number} index
   * @param {string} text
   */
  insertText (index, text) {
    this.text.insert(this.doc, index, text);
  }

  /**
   * Delete text from the internal shared text implementation.
   *
   * @param {number} index
   * @param {number} len
   */
  deleteText (index, len) {
    this.text.delete(this.doc, index, len);
  }

  /**
   * @return {string}
   */
  getText () {
    return this.text.toString()
  }

  /**
   * @param {function (AbstractCrdt): void} f
   */
  transact (f) {
    f(this)
  }

  /**
   * @param {string} key
   * @param {any} val
   */
  setMap (key, val) {
    this.map.set(this.doc, key, val);
  }

  /**
   * @return {Map<string,any> | Object<string, any>}
   */
  getMap () {
    return this.map.value
  }
}
