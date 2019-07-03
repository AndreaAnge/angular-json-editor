import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  
  schema = {
    "a": ["Hello", "World!"],
    "b": {
      "c": {
        "d": {
          "f": {
            "readonly": true
          },
          "g": {
            "minimalLength": 5,
            "maximalLength": 10
          }
        }
      }
    },
    "h": {
      "readonly": true
    },
    "j": {
      "k": {
        "o": {
          "p": {
            "from": 100,
            "to": 999
          },
          "q": {
            "values": [
              1,
              5,
              10
            ]
          },
          "s": {
            "u": {
              "values": [
                "This is where is ends.",
                "For real."
              ]
            }
          }
        }
      }
    }
  };
  data = {
    "a":  ["Hello, World!"],
    "b": {
      "c": {
        "d": {
          "e": 123,
          "f": true,
          "g": "A string."
        }
      }
    },
    "h": "1",
    "i": true,
    "j": {
      "k": {
        "l": "Test!",
        "m": true,
        "n": false,
        "o": {
          "p": 987,
          "q": 5,
          "r": 1,
          "s": {
            "t": true,
            "u": "This is where it ends."
          }
        }
      },
      "y": {
        "l": "Test!",
        "m": true,
        "n": false,
        "o": {
          "p": 987,
          "q": 5,
          "r": 1,
          "s": {
            "t": true,
            "u": "This is where it ends."
          }
        }
      }
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}
