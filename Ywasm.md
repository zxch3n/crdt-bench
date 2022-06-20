| N = 6000                                                                 |          ywasm |
| :----------------------------------------------------------------------- | -------------: |
| Version                                                                  |          0.9.1 |
| Bundle size                                                              |    35397 bytes |
| Bundle size (gzipped)                                                    |     8746 bytes |
| [B1.1] Append N characters (time)                                        |          94 ms |
| [B1.1] Append N characters (avgUpdateSize)                               |       27 bytes |
| [B1.1] Append N characters (encodeTime)                                  |           0 ms |
| [B1.1] Append N characters (docSize)                                     |     6031 bytes |
| [B1.1] Append N characters (memUsed)                                     |            0 B |
| [B1.1] Append N characters (parseTime)                                   |           0 ms |
| [B1.2] Insert string of length N (time)                                  |           0 ms |
| [B1.2] Insert string of length N (avgUpdateSize)                         |     6031 bytes |
| [B1.2] Insert string of length N (encodeTime)                            |           0 ms |
| [B1.2] Insert string of length N (docSize)                               |     6031 bytes |
| [B1.2] Insert string of length N (memUsed)                               |          416 B |
| [B1.2] Insert string of length N (parseTime)                             |           0 ms |
| [B1.3] Prepend N characters (time)                                       |          16 ms |
| [B1.3] Prepend N characters (avgUpdateSize)                              |       26 bytes |
| [B1.3] Prepend N characters (encodeTime)                                 |           0 ms |
| [B1.3] Prepend N characters (docSize)                                    |     6040 bytes |
| [B1.3] Prepend N characters (memUsed)                                    |            0 B |
| [B1.3] Prepend N characters (parseTime)                                  |           1 ms |
| [B1.4] Insert N characters at random positions (time)                    |          81 ms |
| [B1.4] Insert N characters at random positions (avgUpdateSize)           |       29 bytes |
| [B1.4] Insert N characters at random positions (encodeTime)              |           0 ms |
| [B1.4] Insert N characters at random positions (docSize)                 |    29554 bytes |
| [B1.4] Insert N characters at random positions (memUsed)                 |            0 B |
| [B1.4] Insert N characters at random positions (parseTime)               |           3 ms |
| [B1.5] Insert N words at random positions (time)                         |         269 ms |
| [B1.5] Insert N words at random positions (avgUpdateSize)                |       36 bytes |
| [B1.5] Insert N words at random positions (encodeTime)                   |           1 ms |
| [B1.5] Insert N words at random positions (docSize)                      |    87924 bytes |
| [B1.5] Insert N words at random positions (memUsed)                      |            0 B |
| [B1.5] Insert N words at random positions (parseTime)                    |           5 ms |
| [B1.6] Insert string, then delete it (time)                              |           0 ms |
| [B1.6] Insert string, then delete it (avgUpdateSize)                     |     6053 bytes |
| [B1.6] Insert string, then delete it (encodeTime)                        |           0 ms |
| [B1.6] Insert string, then delete it (docSize)                           |       38 bytes |
| [B1.6] Insert string, then delete it (memUsed)                           |          776 B |
| [B1.6] Insert string, then delete it (parseTime)                         |           0 ms |
| [B1.7] Insert/Delete strings at random positions (time)                  |          77 ms |
| [B1.7] Insert/Delete strings at random positions (avgUpdateSize)         |       31 bytes |
| [B1.7] Insert/Delete strings at random positions (encodeTime)            |           1 ms |
| [B1.7] Insert/Delete strings at random positions (docSize)               |    28377 bytes |
| [B1.7] Insert/Delete strings at random positions (memUsed)               |            0 B |
| [B1.7] Insert/Delete strings at random positions (parseTime)             |           2 ms |
| [B1.8] Append N numbers (time)                                           |          18 ms |
| [B1.8] Append N numbers (avgUpdateSize)                                  |       32 bytes |
| [B1.8] Append N numbers (encodeTime)                                     |           0 ms |
| [B1.8] Append N numbers (docSize)                                        |    35634 bytes |
| [B1.8] Append N numbers (memUsed)                                        |            0 B |
| [B1.8] Append N numbers (parseTime)                                      |           0 ms |
| [B1.9] Insert Array of N numbers (time)                                  |           3 ms |
| [B1.9] Insert Array of N numbers (avgUpdateSize)                         |    35657 bytes |
| [B1.9] Insert Array of N numbers (encodeTime)                            |           0 ms |
| [B1.9] Insert Array of N numbers (docSize)                               |    35657 bytes |
| [B1.9] Insert Array of N numbers (memUsed)                               |          224 B |
| [B1.9] Insert Array of N numbers (parseTime)                             |           0 ms |
| [B1.10] Prepend N numbers (time)                                         |          17 ms |
| [B1.10] Prepend N numbers (avgUpdateSize)                                |       36 bytes |
| [B1.10] Prepend N numbers (encodeTime)                                   |           0 ms |
| [B1.10] Prepend N numbers (docSize)                                      |    65658 bytes |
| [B1.10] Prepend N numbers (memUsed)                                      |            0 B |
| [B1.10] Prepend N numbers (parseTime)                                    |           3 ms |
| [B1.11] Insert N numbers at random positions (time)                      |          92 ms |
| [B1.11] Insert N numbers at random positions (avgUpdateSize)             |       34 bytes |
| [B1.11] Insert N numbers at random positions (encodeTime)                |           1 ms |
| [B1.11] Insert N numbers at random positions (docSize)                   |    59152 bytes |
| [B1.11] Insert N numbers at random positions (memUsed)                   |            0 B |
| [B1.11] Insert N numbers at random positions (parseTime)                 |           3 ms |
| [B2.1] Concurrently insert string of length N at index 0 (time)          |           0 ms |
| [B2.1] Concurrently insert string of length N at index 0 (updateSize)    |     6094 bytes |
| [B2.1] Concurrently insert string of length N at index 0 (encodeTime)    |           0 ms |
| [B2.1] Concurrently insert string of length N at index 0 (docSize)       |    12151 bytes |
| [B2.1] Concurrently insert string of length N at index 0 (memUsed)       |           96 B |
| [B2.1] Concurrently insert string of length N at index 0 (parseTime)     |           0 ms |
| [B2.2] Concurrently insert N characters at random positions (time)       |         213 ms |
| [B2.2] Concurrently insert N characters at random positions (updateSize) |   177007 bytes |
| [B2.2] Concurrently insert N characters at random positions (encodeTime) |           1 ms |
| [B2.2] Concurrently insert N characters at random positions (docSize)    |    66860 bytes |
| [B2.2] Concurrently insert N characters at random positions (memUsed)    |            0 B |
| [B2.2] Concurrently insert N characters at random positions (parseTime)  |           6 ms |
| [B2.3] Concurrently insert N words at random positions (time)            |         614 ms |
| [B2.3] Concurrently insert N words at random positions (updateSize)      |   215213 bytes |
| [B2.3] Concurrently insert N words at random positions (encodeTime)      |           3 ms |
| [B2.3] Concurrently insert N words at random positions (docSize)         |   178130 bytes |
| [B2.3] Concurrently insert N words at random positions (memUsed)         |          488 B |
| [B2.3] Concurrently insert N words at random positions (parseTime)       |          10 ms |
| [B2.4] Concurrently insert & delete (time)                               |        1546 ms |
| [B2.4] Concurrently insert & delete (updateSize)                         |   398881 bytes |
| [B2.4] Concurrently insert & delete (encodeTime)                         |           5 ms |
| [B2.4] Concurrently insert & delete (docSize)                            |   279172 bytes |
| [B2.4] Concurrently insert & delete (memUsed)                            |          424 B |
| [B2.4] Concurrently insert & delete (parseTime)                          |          16 ms |
| [B3.1] 20√N clients concurrently set number in Map (time)                |         155 ms |
| [B3.1] 20√N clients concurrently set number in Map (updateSize)          |    49179 bytes |
| [B3.1] 20√N clients concurrently set number in Map (encodeTime)          |           1 ms |
| [B3.1] 20√N clients concurrently set number in Map (docSize)             |    32243 bytes |
| [B3.1] 20√N clients concurrently set number in Map (memUsed)             |          256 B |
| [B3.1] 20√N clients concurrently set number in Map (parseTime)           |           8 ms |
| [B3.2] 20√N clients concurrently set Object in Map (time)                |         155 ms |
| [B3.2] 20√N clients concurrently set Object in Map (updateSize)          |    85082 bytes |
| [B3.2] 20√N clients concurrently set Object in Map (encodeTime)          |           1 ms |
| [B3.2] 20√N clients concurrently set Object in Map (docSize)             |    32233 bytes |
| [B3.2] 20√N clients concurrently set Object in Map (memUsed)             |            0 B |
| [B3.2] 20√N clients concurrently set Object in Map (parseTime)           |           8 ms |
| [B3.3] 20√N clients concurrently set String in Map (time)                |         163 ms |
| [B3.3] 20√N clients concurrently set String in Map (updateSize)          |  7826237 bytes |
| [B3.3] 20√N clients concurrently set String in Map (encodeTime)          |           4 ms |
| [B3.3] 20√N clients concurrently set String in Map (docSize)             |    36849 bytes |
| [B3.3] 20√N clients concurrently set String in Map (memUsed)             |            0 B |
| [B3.3] 20√N clients concurrently set String in Map (parseTime)           |          10 ms |
| [B3.4] 20√N clients concurrently insert text in Array (time)             |         156 ms |
| [B3.4] 20√N clients concurrently insert text in Array (updateSize)       |    52746 bytes |
| [B3.4] 20√N clients concurrently insert text in Array (encodeTime)       |           1 ms |
| [B3.4] 20√N clients concurrently insert text in Array (docSize)          |    26591 bytes |
| [B3.4] 20√N clients concurrently insert text in Array (memUsed)          |            0 B |
| [B3.4] 20√N clients concurrently insert text in Array (parseTime)        |           2 ms |
| [B4] Apply real-world editing dataset (time)                             |       24127 ms |
| [B4] Apply real-world editing dataset (avgUpdateSize)                    |        skipped |
| [B4] Apply real-world editing dataset (encodeTime)                       |           2 ms |
| [B4] Apply real-world editing dataset (docSize)                          |   159928 bytes |
| [B4] Apply real-world editing dataset (memUsed)                          |          848 B |
| [B4] Apply real-world editing dataset (parseTime)                        |          12 ms |
| [B4x100] Apply real-world editing dataset 100 times (time)               |     1505161 ms |
| [B4x100] Apply real-world editing dataset 100 times (encodeTime)         |         149 ms |
| [B4x100] Apply real-world editing dataset 100 times (docSize)            | 15989245 bytes |
| [B4x100] Apply real-world editing dataset 100 times (parseTime)          |        1500 ms |
| [B4x100] Apply real-world editing dataset 100 times (memUsed)            |          120 B |
