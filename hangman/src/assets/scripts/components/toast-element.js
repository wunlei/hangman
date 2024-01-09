import BaseElement from "./base-element.js";

function toastCross() {
  const crossSvg = `<path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>`;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttributeNS(null, "viewBox", "0 0 24 24");
  svg.classList.add("toast__icon-close");
  svg.innerHTML = crossSvg;
  return svg;
}

export default class ToastElement {
  constructor({ parentNode, message = "" }) {
    this.isOpen = false;

    this.toastElement = new BaseElement({
      parentNode: parentNode,
      classNames: ["toast"],
      textContent: message,
    });

    this.closeBtn = toastCross();
    this.toastElement.getNode().append(this.closeBtn);
    this.closeBtn.onclick = () => {
      this.close();
    };
  }

  updateMessage(message) {
    this.toastElement.updateTextContent(message);
  }

  toggleOpen() {
    if (!this.isOpen) {
      this.isOpen = true;
      this.toastElement.addClass("open");
      this.setTimeoutId = setTimeout(() => {
        this.isOpen = false;
        this.toastElement.removeClass("open");
      }, 5000);
    }
  }

  close() {
    this.isOpen = false;
    this.toastElement.removeClass("open");
    clearTimeout(this.setTimeoutId);
  }
}
