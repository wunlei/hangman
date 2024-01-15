import BaseElement from "./base-element.js";
import { getRandomArbitrary } from "../utils/utils.js";

const PHRASE_WIN = "You win!";
const PHRASE_LOST = "You lose!";
const owlsPicCount = 16;

function getRandomOwlImage() {
  return `./src/assets/images/owl${getRandomArbitrary(1, owlsPicCount)}.jpg`;
}

export default class ModalEndGame {
  constructor({ parentNode }) {
    this.modalContainer = new BaseElement({
      classNames: ["modal-container"],
      parentNode: parentNode,
    });

    this.overflow = new BaseElement({
      classNames: ["modal__overflow"],
      parentNode: this.modalContainer.getNode(),
    });

    this.modalContent = new BaseElement({
      classNames: ["modal"],
      parentNode: this.modalContainer.getNode(),
    });

    this.modalImg = new BaseElement({
      classNames: ["modal__img"],
      parentNode: this.modalContent.getNode(),
      tagName: "img",
    });

    const img = this.modalImg.getNode();
    img.src = getRandomOwlImage();

    this.modalTitle = new BaseElement({
      tagName: "h2",
      classNames: ["modal__title"],
      parentNode: this.modalContent.getNode(),
    });

    this.modalAnswer = new BaseElement({
      tagName: "h3",
      classNames: ["modal__answer"],
      parentNode: this.modalContent.getNode(),
    });

    this.btnPlayAgain = new BaseElement({
      classNames: ["modal__btn"],
      parentNode: this.modalContent.getNode(),
      textContent: "Play again",
    });
  }

  /**
   * Show endgame modal with current word & game state
   * @param {boolean} isWin - Game state
   * @param {string} answer - Current word
   */
  showModal({ isWin, answer }) {
    this.modalContainer.addClass("open");
    this.modalTitle.updateTextContent(isWin ? PHRASE_WIN : PHRASE_LOST);
    this.modalAnswer.updateTextContent(`Answer is ${answer}`);
  }

  closeModal() {
    this.modalContainer.removeClass("open");
  }

  /**
   * Add callback for PlayAgain button onclick
   * @param {function} callback
   */
  addPlayAgainBtnCallback(callback) {
    this.btnPlayAgain.getNode().onclick = () => {
      callback();
      const img = this.modalImg.getNode();
      img.src = getRandomOwlImage();
    };
  }
}
