import BaseElement from "./base-element.js";

export default class GuessCounter {
  constructor(parentNode) {
    this.total = 6;
    this.current = 0;

    this.counterContainer = new BaseElement({
      tagName: "p",
      parentNode: parentNode,
      classNames: ["letter-guesses"],
      textContent: "Incorrect guesses: ",
    });

    this.counterElement = new BaseElement({
      tagName: "span",
      classNames: ["letter-guesses__counter"],
      parentNode: this.counterContainer.getNode(),
      textContent: `${this.current} / ${this.total}`,
    });
  }

  /**
   * Add +1 to errors count, update textContent
   */
  addOne() {
    this.current += 1;
    this.counterElement.updateTextContent(`${this.current} / ${this.total}`);
  }

  /**
   * Reset errors count, update textContent
   */
  resetCounter() {
    this.current = 0;
    this.counterElement.updateTextContent(`${this.current} / ${this.total}`);
  }
}
