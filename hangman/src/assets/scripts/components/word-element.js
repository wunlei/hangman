import BaseElement from "./base-element.js";

export default class WordElement {
  constructor(parentNode) {
    this.currentWord = null;
    this.letterElements = [];

    this.container = new BaseElement({
      parentNode: parentNode,
      classNames: ["word-container"],
    });

    this.wordContainer = new BaseElement({
      parentNode: this.container.getNode(),
      classNames: ["word"],
    });

    this.tipElement = new BaseElement({
      tagName: "p",
      parentNode: this.container.getNode(),
      classNames: ["word-tip"],
    });
  }

  /**
   *
   * @param {string} word - Uppercase word
   */
  setCurrWord({ word, tip }) {
    if (word && tip) {
      console.log("current word: ", word);
      this.currentWord = word;
      this.letterElements.forEach((el) => el.destroy());
      this.letterElements = [];
      this.createLetterElements();
      this.tipElement.updateTextContent(tip);
    }
  }

  createLetterElements() {
    if (this.currentWord) {
      for (let i = 0; i < this.currentWord.length; i++) {
        const element = new BaseElement({
          tagName: "span",
          classNames: ["word-letter", "word-letter_empty"],
          parentNode: this.wordContainer.getNode(),
        });
        this.letterElements.push(element);
      }
    }
  }

  /**
   *
   * @param {string} letter - Uppercase letter
   */
  updateSingleLetter(letter) {
    if (this.currentWord) {
      const letterIndex = this.currentWord.indexOf(letter);
      this.letterElements[letterIndex].updateTextContent(letter);
      this.letterElements[letterIndex].removeClass("word-letter_empty");
      this.letterElements[letterIndex].addClass("word-letter_anim");
    }
  }

  /**
   *
   * @param {string} letter - Uppercase letter
   */
  updateSeveralLetters(letter) {
    if (this.currentWord) {
      this.currentWord.split("").forEach((el, i) => {
        if (el === letter) {
          this.letterElements[i].updateTextContent(letter);
          this.letterElements[i].removeClass("word-letter_empty");
          this.letterElements[i].addClass("word-letter_anim");
        }
      });
    }
  }
}
