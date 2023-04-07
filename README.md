# WebMidi + Threejs in Typescript

## Pioneer DJM-700 Manual
http://faq.pioneerdj.com/files/DRA1418B.pdf

## Pioneer DJM-700 MidiEvent

| チャンネル           | Fader  | Cue | Low | Mid | Hi  |
| -------------------- | ------ | --- | --- | --- | --- |
| Ch1                  | 17     | 70  | 4   | 3   | 2   |
| Ch2                  | 18     | 71  | 9   | 8   | 7   |
| Ch3                  | 19     | 72  | 21  | 15  | 14  |
| Ch4                  | 20     | 73  | 82  | 92  | 81  |
| Booth Monitor Level  | 25     |     |     |     |     |
| Balance              | 23     |     |     |     |     |
| Master               | 24     |     |     |     |     |
| Master Cue           | 74     |     |     |     |     |
| Effect Cue           | 75     |     |     |     |     |
| Effect Level / Depth | 91     |     |     |     |     |
| Effect Button        | 64     |     |     |     |     |
| Time                 | 45(13) |     |     |     |     |
| Effect channel       | ?      |     |     |     |     |
| Freqency             | 5      |     |     |     |     |
| Tap                  | 78     |     |     |     |     |
| Beat (Negative)      | 76     |     |     |     |     |
| Beat (Positive)      | 77     |     |     |     |     |
| Mic EQ Hi            | 30     |     |     |     |     |
| Mic EQ Low           | 31     |     |     |     |     |
| Mixing               | 27     |     |     |     |     |
| Head Phone Level     | 26     |     |     |     |     |
| Cross Fader          | 11     |     |     |     |     |


## MIDIケーブルの接続
- ミキサーのOUTに、ケーブルのInをつなげること