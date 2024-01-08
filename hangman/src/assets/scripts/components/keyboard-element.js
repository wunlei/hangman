import BaseElement from "./base-element.js";

const keyboardLayout = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

export default class KeyboardElement {
  constructor(parentNode) {
    // key: keyboard letter, value: key element
    this.keyElements = {};
    this.keyboardContainer = new BaseElement({
      parentNode,
      classNames: ["keyboard"],
    });

    for (let i = 0; i < keyboardLayout.length; i++) {
      const row = new BaseElement({
        parentNode: this.keyboardContainer.getNode(),
        classNames: ["keyboard-row"],
      });

      keyboardLayout[i].forEach((key) => {
        const keyBtn = new BaseElement({
          parentNode: row.getNode(),
          classNames: ["keyboard-letter"],
          tagName: "button",
          textContent: key,
        });

        keyBtn.getNode().dataset.key = key;
        this.keyElements[key] = keyBtn;
      });
    }
  }

  /**
   * Add callback for each key element onclick
   * @param {function} callback - callback function
   */
  addBtnCallback(callback) {
    Object.values(this.keyElements).forEach((el) => {
      el.getNode().onclick = () => {
        const key = el.getNode().dataset.key;
        if (key) {
          callback(key);
        }
      };
    });
  }

  /**
   *
   * @param {string} letter - Uppercase letter
   */
  markKeyWrong(letter) {
    this.keyElements[letter].addClass("keyboard-letter_disable");
    this.keyElements[letter].addClass("keyboard-letter_wrong");
  }

  /**
   *
   * @param {string} letter - Uppercase letter
   */
  markKeyCorrect(letter) {
    this.keyElements[letter].addClass("keyboard-letter_disable");
  }

  resetKeyboardState() {
    Object.values(this.keyElements).forEach((btn) => {
      btn.removeClass("keyboard-letter_disable");
      btn.removeClass("keyboard-letter_wrong");
    });
  }
}
