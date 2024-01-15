import { getRandomArbitrary } from "./utils/utils.js";

export default class State {
  constructor() {
    this.currentWord = null;
    this.remainingLetters = this.currentWord;
    this.currentTip = null;
    this.errorsCount = 0;
    this.pressedKeys = [];
    this.words = [];
    this.isGameEnded = false;
    this.handleLetterGuess = this.handleLetterGuess.bind(this);
  }

  setWords(words) {
    this.words = words;
    this.setCurrentWord();
  }

  getCurrentWord() {
    return { word: this.currentWord, tip: this.currentTip };
  }

  getRandomWord() {
    const randomNum = getRandomArbitrary(0, this.words.length - 1);
    const newWord = this.words[randomNum].word.toUpperCase();
    const newTip = this.words[randomNum].description;

    if (!this.currentWord || !this.currentTip) {
      return { word: newWord, tip: newTip };
    }

    if (this.words.length === 1) {
      return { word: this.currentWord, tip: this.currentTip };
    }

    if (this.currentWord !== newWord) {
      return { word: newWord, tip: newTip };
    }

    return this.getRandomWord();
  }

  setCurrentWord() {
    this.currentWord = this.getRandomWord().word;
    this.remainingLetters = this.currentWord;
    this.currentTip = this.getRandomWord().tip;
  }

  resetCurrentData() {
    this.errorsCount = 0;
    this.pressedKeys = [];
    this.isGameEnded = false;
    this.setCurrentWord();
  }

  getPressedKeys() {
    return this.pressedKeys;
  }

  updatePressedKeys(key) {
    this.pressedKeys.push(key);
  }

  getErrorsCount() {
    return this.errorsCount;
  }

  updateErrorsCount(count) {
    this.errorsCount += count;
  }

  /**
   * Remove letter from remaining word letters
   * @param {string} letter - Uppercase letter
   */
  handleLetterGuess(letter) {
    if (this.remainingLetters) {
      this.remainingLetters = this.remainingLetters.replaceAll(letter, "");
    }
    // console.log("letters left", this.lettersLeft);
  }

  getIsGameEnded() {
    return this.isGameEnded;
  }

  setIsGameEnded(value) {
    this.isGameEnded = value;
  }

  getRemainingLetters() {
    return this.remainingLetters;
  }
}
