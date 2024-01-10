import BaseElement from "./components/base-element.js";
import GuessCounter from "./components/guess-counter-element.js";
import HangmanElement from "./components/hangman-element.js";
import KeyboardElement from "./components/keyboard-element.js";
import ModalEndGame from "./components/modal-endgame-element.js";
import ToastElement from "./components/toast-element.js";
import WordElement from "./components/word-element.js";

const langSupportMessage = "The game supports only English language";

export default class View {
  constructor({ state: state, parentNode }) {
    this.state = state;

    this.rootElement = new BaseElement({
      parentNode: parentNode,
      classNames: ["app"],
    });

    const gameVisualNode = new BaseElement({
      classNames: ["game-visual"],
      parentNode: this.rootElement.getNode(),
    }).getNode();

    new BaseElement({
      classNames: ["title"],
      tagName: "h1",
      textContent: "Hangman",
      parentNode: gameVisualNode,
    });

    this.hangmanElement = new HangmanElement(gameVisualNode);

    const gameControlsNode = new BaseElement({
      classNames: ["game-controls"],
      parentNode: this.rootElement.getNode(),
    }).getNode();

    this.wordElement = new WordElement(gameControlsNode);
    this.guessCounterElement = new GuessCounter(gameControlsNode);
    this.keyboardElement = new KeyboardElement(gameControlsNode);

    this.toastElement = new ToastElement({
      parentNode: this.rootElement.getNode(),
      message: langSupportMessage,
    });

    this.modalElement = new ModalEndGame({
      parentNode: this.rootElement.getNode(),
    });
  }

  /**
   * Update word element with current word&tip from state
   */
  handleWordUpdate() {
    this.wordElement.setCurrWord({
      word: this.state.getCurrentWord().word,
      tip: this.state.getCurrentWord().tip,
    });
  }

  /**
   * Handle each keyboard key element onclick
   */
  handleKeyBtnClick(callback) {
    this.keyboardElement.addBtnCallback(callback);
  }

  handleLetterGuess(letter) {
    this.wordElement.updateSingleLetter(letter);
  }

  handleSeveralLettersGuess(letter) {
    this.wordElement.updateSeveralLetters(letter);
  }

  handleErrorGuess(letter, errorsCount) {
    this.keyboardElement.markKeyWrong(letter);
    this.guessCounterElement.addOne();
    this.hangmanElement.showBodyPart(errorsCount);
  }

  handleCorrectGuess(letter) {
    this.keyboardElement.markKeyCorrect(letter);
  }

  toggleToast() {
    this.toastElement.toggleOpen();
  }

  handlePlayAgainBtnClick(callback) {
    this.modalElement.addPlayAgainBtnCallback(callback);
  }

  handleGameReset() {
    this.handleWordUpdate();
    this.hangmanElement.hideAllBodyParts();
    this.keyboardElement.resetKeyboardState();
    this.guessCounterElement.resetCounter();
    this.modalElement.closeModal();
  }

  handleGameLost() {
    const currWord = this.state.getCurrentWord().word;
    if (currWord) {
      this.modalElement.showModal({
        isWin: false,
        answer: currWord,
      });
    }
  }

  handleGameWin() {
    const currWord = this.state.getCurrentWord().word;
    if (currWord) {
      this.modalElement.showModal({
        isWin: true,
        answer: currWord,
      });
    }
  }
}
