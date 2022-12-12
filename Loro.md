
N = 6000 | loro-wasm|
| :- |  -:  |
|Version                                                                   |         skipped |
|Bundle size                                                               |         skipped |
|Bundle size (gzipped)                                                     |         skipped |
|[B1.1] Append N characters (time)                                         |           52 ms |
|[B1.1] Append N characters (avgUpdateSize)                                |        41 bytes |
|[B1.1] Append N characters (encodeTime)                                   |            0 ms |
|[B1.1] Append N characters (docSize)                                      |      6138 bytes |
|[B1.1] Append N characters (memUsed)                                      |             0 B |
|[B1.1] Append N characters (parseTime)                                    |            0 ms |
|[B1.2] Insert string of length N (time)                                   |            1 ms |
|[B1.2] Insert string of length N (avgUpdateSize)                          |      6038 bytes |
|[B1.2] Insert string of length N (encodeTime)                             |            0 ms |
|[B1.2] Insert string of length N (docSize)                                |      6038 bytes |
|[B1.2] Insert string of length N (memUsed)                                |           448 B |
|[B1.2] Insert string of length N (parseTime)                              |            1 ms |
|[B1.3] Prepend N characters (time)                                        |           52 ms |
|[B1.3] Prepend N characters (avgUpdateSize)                               |        40 bytes |
|[B1.3] Prepend N characters (encodeTime)                                  |            4 ms |
|[B1.3] Prepend N characters (docSize)*                                    |     84055 bytes | ⚠️
|[B1.3] Prepend N characters (memUsed)                                     |         12.9 kB |
|[B1.3] Prepend N characters (parseTime)                                   |           10 ms | ️
|[B1.4] Insert N characters at random positions (time)                     |           34 ms | ⚠️
|[B1.4] Insert N characters at random positions (avgUpdateSize)            |        41 bytes |
|[B1.4] Insert N characters at random positions (encodeTime)               |            1 ms |
|[B1.4] Insert N characters at random positions (docSize)                  |     89280 bytes | ⚠️
|[B1.4] Insert N characters at random positions (memUsed)                  |           592 B |
|[B1.4] Insert N characters at random positions (parseTime)                |            3 ms |
|[B1.5] Insert N words at random positions (time)                          |           21 ms |
|[B1.5] Insert N words at random positions (avgUpdateSize)                 |        48 bytes |
|[B1.5] Insert N words at random positions (encodeTime)                    |            1 ms |
|[B1.5] Insert N words at random positions (docSize)                       |    121410 bytes |
|[B1.5] Insert N words at random positions (memUsed)                       |           888 B |
|[B1.5] Insert N words at random positions (parseTime)                     |            4 ms |
|[B1.6] Insert string, then delete it (time)                               |            0 ms |
|[B1.6] Insert string, then delete it (avgUpdateSize)                      |      6077 bytes |
|[B1.6] Insert string, then delete it (encodeTime)                         |            0 ms |
|[B1.6] Insert string, then delete it (docSize)                            |      6056 bytes |
|[B1.6] Insert string, then delete it (memUsed)                            |             0 B |
|[B1.6] Insert string, then delete it (parseTime)                          |            0 ms |
|[B1.7] Insert/Delete strings at random positions (time)                   |           21 ms |
|[B1.7] Insert/Delete strings at random positions (avgUpdateSize)          |        44 bytes |
|[B1.7] Insert/Delete strings at random positions (encodeTime)             |            1 ms |
|[B1.7] Insert/Delete strings at random positions (docSize)                |     97913 bytes | ⚠️
|[B1.7] Insert/Delete strings at random positions (memUsed)                |           592 B |
|[B1.7] Insert/Delete strings at random positions (parseTime)              |            3 ms |
|[B1.8] Append N numbers (time)                                            |           20 ms |
|[B1.8] Append N numbers (avgUpdateSize)                                   |        45 bytes |
|[B1.8] Append N numbers (encodeTime)                                      |            0 ms |
|[B1.8] Append N numbers (docSize)                                         |     35741 bytes |
|[B1.8] Append N numbers (memUsed)                                         |           592 B |
|[B1.8] Append N numbers (parseTime)                                       |            0 ms |
|[B1.9] Insert Array of N numbers (time)                                   |           17 ms | ⚠️
|[B1.9] Insert Array of N numbers (avgUpdateSize)                          |    269308 bytes | ⚠️
|[B1.9] Insert Array of N numbers (encodeTime)                             |            0 ms |
|[B1.9] Insert Array of N numbers (docSize)                                |     35764 bytes |
|[B1.9] Insert Array of N numbers (memUsed)                                |           784 B |
|[B1.9] Insert Array of N numbers (parseTime)                              |            0 ms |
|[B1.10] Prepend N numbers (time)                                          |           25 ms |
|[B1.10] Prepend N numbers (avgUpdateSize)                                 |        44 bytes |
|[B1.10] Prepend N numbers (encodeTime)                                    |            1 ms |
|[B1.10] Prepend N numbers (docSize)                                       |    113679 bytes |
|[B1.10] Prepend N numbers (memUsed)                                       |         51.8 kB |
|[B1.10] Prepend N numbers (parseTime)                                     |            3 ms |
|[B1.11] Insert N numbers at random positions (time)                       |           23 ms |
|[B1.11] Insert N numbers at random positions (avgUpdateSize)              |        45 bytes |
|[B1.11] Insert N numbers at random positions (encodeTime)                 |            1 ms |
|[B1.11] Insert N numbers at random positions (docSize)                    |    118965 bytes |
|[B1.11] Insert N numbers at random positions (memUsed)                    |           712 B |
|[B1.11] Insert N numbers at random positions (parseTime)                  |            3 ms |
|[B2.1] Concurrently insert string of length N at index 0 (time)           |            0 ms |
|[B2.1] Concurrently insert string of length N at index 0 (updateSize)     |      9189 bytes |
|[B2.1] Concurrently insert string of length N at index 0 (encodeTime)     |            0 ms |
|[B2.1] Concurrently insert string of length N at index 0 (docSize)        |     12201 bytes |
|[B2.1] Concurrently insert string of length N at index 0 (memUsed)        |           656 B |
|[B2.1] Concurrently insert string of length N at index 0 (parseTime)      |            0 ms |
|[B2.2] Concurrently insert N characters at random positions (time)        |           78 ms | ⚠️
|[B2.2] Concurrently insert N characters at random positions (updateSize)  |    284299 bytes | ⚠️
|[B2.2] Concurrently insert N characters at random positions (encodeTime)  |            2 ms |
|[B2.2] Concurrently insert N characters at random positions (docSize)     |    179044 bytes |
|[B2.2] Concurrently insert N characters at random positions (memUsed)     |           368 B |
|[B2.2] Concurrently insert N characters at random positions (parseTime)   |            5 ms |
|[B2.3] Concurrently insert N words at random positions (time)             |           67 ms |
|[B2.3] Concurrently insert N words at random positions (updateSize)       |    340786 bytes | ⚠️
|[B2.3] Concurrently insert N words at random positions (encodeTime)       |            3 ms |
|[B2.3] Concurrently insert N words at random positions (docSize)          |    242213 bytes |
|[B2.3] Concurrently insert N words at random positions (memUsed)          |           368 B |
|[B2.3] Concurrently insert N words at random positions (parseTime)        |            6 ms |
|[B2.4] Concurrently insert & delete (time)                                |          135 ms | ⚠️
|[B2.4] Concurrently insert & delete (updateSize)                          |    660289 bytes |
|[B2.4] Concurrently insert & delete (encodeTime)                          |            5 ms |
|[B2.4] Concurrently insert & delete (docSize)                             |    444782 bytes |
|[B2.4] Concurrently insert & delete (memUsed)                             |             0 B |
|[B2.4] Concurrently insert & delete (parseTime)                           |           13 ms |
|[B3.1] 20√N clients concurrently set number in Map (time)                 |          808 ms | ⚠ ⚠️️
|[B3.1] 20√N clients concurrently set number in Map (updateSize)           |     56102 bytes |
|[B3.1] 20√N clients concurrently set number in Map (encodeTime)           |            3 ms |
|[B3.1] 20√N clients concurrently set number in Map (docSize)              |     54564 bytes |
|[B3.1] 20√N clients concurrently set number in Map (memUsed)              |             0 B |
|[B3.1] 20√N clients concurrently set number in Map (parseTime)            |            7 ms |
|[B3.2] 20√N clients concurrently set Object in Map (time)                 |          783 ms | ⚠️ ⚠️
|[B3.2] 20√N clients concurrently set Object in Map (updateSize)           |     91962 bytes |
|[B3.2] 20√N clients concurrently set Object in Map (encodeTime)           |            3 ms |
|[B3.2] 20√N clients concurrently set Object in Map (docSize)              |     90424 bytes |
|[B3.2] 20√N clients concurrently set Object in Map (memUsed)              |             0 B |
|[B3.2] 20√N clients concurrently set Object in Map (parseTime)            |            3 ms |
|[B3.3] 20√N clients concurrently set String in Map (time)                 |          856 ms | ⚠️
|[B3.3] 20√N clients concurrently set String in Map (updateSize)           |   7833148 bytes |
|[B3.3] 20√N clients concurrently set String in Map (encodeTime)           |           65 ms |
|[B3.3] 20√N clients concurrently set String in Map (docSize)              |   7831610 bytes |
|[B3.3] 20√N clients concurrently set String in Map (memUsed)              |           272 B |
|[B3.3] 20√N clients concurrently set String in Map (parseTime)            |            6 ms |
|[B3.4] 20√N clients concurrently insert text in Array (time)              |         3254 ms | ⚠️ ⚠️ ⚠️
|[B3.4] 20√N clients concurrently insert text in Array (updateSize)        |     64314 bytes |
|[B3.4] 20√N clients concurrently insert text in Array (encodeTime)        |            5 ms |
|[B3.4] 20√N clients concurrently insert text in Array (docSize)           |     62776 bytes |
|[B3.4] 20√N clients concurrently insert text in Array (memUsed)           |           712 B |
|[B3.4] 20√N clients concurrently insert text in Array (parseTime)         |          341 ms | ⚠️ ⚠️ ⚠️
|[B4] Apply real-world editing dataset (time)                              |          128 ms |
|[B4] Apply real-world editing dataset (avgUpdateSize)                     |         skipped |
|[B4] Apply real-world editing dataset (encodeTime)                        |           10 ms |
|[B4] Apply real-world editing dataset (docSize)                           |    339730 bytes |
|[B4] Apply real-world editing dataset (memUsed)                           |            1 kB |
|[B4] Apply real-world editing dataset (parseTime)                         |            7 ms |
|[B4x100] Apply real-world editing dataset 100 times (time)                |        14315 ms |
|[B4x100] Apply real-world editing dataset 100 times (encodeTime)          |         1607 ms |
|[B4x100] Apply real-world editing dataset 100 times (docSize)             |  33981102 bytes |
|[B4x100] Apply real-world editing dataset 100 times (parseTime)           |          729 ms |
|[B4x100] Apply real-world editing dataset 100 times (memUsed)             |            1 kB |
