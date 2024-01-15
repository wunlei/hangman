const hangmanSvgInner = `
  <g
    fill="#fff"
    stroke="#000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width=".8"
    paint-order="markers fill stroke"
  >
    <path
      d="m83.5 42.6 7.3-4.2V47l-7.3 4zm0 0L17.4 4.5 24.7.3l66.1 38.1zM17.4 4.5V13l66 38.1v-8.5z"
    />
    <path
      d="M44.3 28.6v107.3L37 140V24.3l7.3 4.3M29.6 135.9 37 140V24.3L29.6 20v116"
    />
    <path
      d="M7.6 154.2 15 150l22-39.2v-7.4zm0 0L.3 150l29.3-50.8 7.4 4.2zm36.7-43.7 17.1 15.6 4.9-2.6-22-20.9zm17.1 15.6-7.3-4.3-9.8-8.5v-2.8zM59 37 37 49.7v-8.5l14.6-8.4z"
    />
  </g>
  <g
    stroke="#000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width=".8"
    paint-order="markers fill stroke"
    class="hangman-svg__bodypart hangman-svg__leg-right"
  >
    <path
      fill="#554b41"
      d="M69.3 127.3s-1.8-11.4-1.5-16.4c.2-3 2.1-7.3 2.1-7.3l.9-13.5c2.5 0 3.6-.9 4.9-1.7 0 0 .8 6.8.6 10.2-.2 4-2.1 12-2.1 12l-1.5 17z"
    />
    <path
      fill="#efc4bb"
      d="m72.7 127.6 3.4 6.6-3 1s-3.4-2.4-4-4.2c-.5-1.2.2-3.7.2-3.7z"
    />
  </g>
  <g
    stroke="#000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width=".8"
    paint-order="markers fill stroke"
    class="hangman-svg__bodypart hangman-svg__leg-left"
  >
    <path
      fill="#554b41"
      d="m64 133.7 1.2-16.3 4.7-13.8.9-13.5-7.1-.3s-2.6 2.8-3.2 4.6c-1.8 6.2.4 19.5.4 19.5s-1.2 4-1.4 6.1c-.3 4.5.9 13.4.9 13.4z"
    />
    <path
      fill="#efc4bb"
      d="M60.4 133.4s-.9 2.1-.6 3.1c.3 1.7 3 4.2 3 4.2l3.2-.8-2-6.2z"
    />
  </g>
  <g
    stroke="#000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width=".8"
    paint-order="markers fill stroke"
    class="hangman-svg__bodypart hangman-svg__body"
  >
    <path
      fill="#746454"
      d="M75.2 69.3c.6 0 1.3.3 1.3.3s.6 16.9-1 18.8c-2.4 3-11.5 1.4-11.5 1.4a85 85 0 0 0-4.4-16.5c1.2-.5 3.4-1.6 6.6-2.7l6-1 3-.3z"
    />
    <path
      fill="#efc4bb"
      d="M72 68.4c-.6.7-1.6 2.8-5.9.9v1.3c3.3 1.6 5.5 0 6.1-1z"
    />
  </g>
  <g
    stroke="#000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width=".8"
    paint-order="markers fill stroke"
    class="hangman-svg__bodypart hangman-svg__arm-left"
  >
    <path
      fill="#efc4bb"
      d="M59.5 73.5c-1 5.7-1.4 11.3-.8 16.7 5.3 5 8.4 5 11.2 6.3 0 0-.3 1.9.3 3.3 1 2.2 3 3.2 3 3.2l1-.8-.8-3.3c-.2-1.2 0-3.4 0-3.4l-10.2-6.8-.3-4c-1-3.8-1.6-7.7-3.4-11.2z"
    />
    <path
      d="M70 96.5c.8-.8 2-1 3.4-1-.5-.5-.5-1.3-1.8-1.2-1.7-.3-2.9.5-4 1.3.7.8 1.4 1.1 2.3.9z"
    />
  </g>
  <g
    fill="#efc4bb"
    stroke="#000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width=".8"
    paint-order="markers fill stroke"
    class="hangman-svg__bodypart hangman-svg__arm-right"
  >
    <path
      d="M76.6 70v13.3l-3 11.9 1.2 3.4.8 3.1 2-.5s.7-2.6.3-4c-.4-1-2.2-2.7-2.2-2.7s3-6.3 3.3-9.8C79.3 80 76.6 70 76.6 70z"
    />
    <path
      fill="#000"
      d="M75.7 94.5c1.8-.7.8-1.2.8-1.7-.7-.2-1.3-.5-2.4.6-.9.7-.5 1.2-.4 1.8z"
    />
  </g>
  <g
    fill="#fff"
    stroke="#000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width=".8"
    paint-order="markers fill stroke"
  >
    <path
      d="M68.8 42.7c-.9 0-2.2-.5-2.5-1.5v-8.4c2.5-1.5 4.7-2.5 7.4-4.3 1.4 0 1.9.7 2.4 1.4 1-.2 1.6.2 2.5 1.4l-7.4 4.3v22.6l-2.4-1.4V34.2m0 0 7.3-4.3"
    />
    <path
      d="M68.8 56.8c-3.8 3.9-5.4 5.6-5.3 10 0 3.2 3.5 5.7 6.4 5.5 2.4-.1 3.3-.8 4.6-3 1.3-2.6 1-7.3-3.2-12.6v1.5c2 4.2 2.8 7.2 2.4 9-.3 1.3-1.8 3.7-3.5 3.8-1.6 0-5.3-1.4-5.3-4.6 0-2.6 3-7.1 4.7-8.2.4-.1 1.6 0 1.6 0v-1.5h-2.4z"
    />
  </g>
  <path
    fill="#efc4bb"
    stroke="#000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width=".8"
    d="M70.8 69.7c2.8-2 3.8-7.2 2-10.2-1-1.7-3.4-3-5.8-1.8-1.7 1-2.8 2.1-3.3 3.7s.1 3.4.6 5c.4.9.8 1.8 1.5 2.4.9.8 3.6 1.8 5 .9z"
    paint-order="markers fill stroke"
    class="hangman-svg__bodypart hangman-svg__head"
  />`;

function hangmanSvg() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttributeNS(null, "viewBox", "0 0 92.1 154.5");
  // svg.setAttributeNS(null, "width", "344.2");
  // svg.setAttributeNS(null, "height", "584");
  svg.classList.add("hangman-svg");
  svg.innerHTML = hangmanSvgInner;
  return svg;
}

export default class HangmanElement {
  constructor(parentNode) {
    this.svg = hangmanSvg();
    this.bodyParts = {
      head: this.svg.querySelector(".hangman-svg__head"),
      body: this.svg.querySelector(".hangman-svg__body"),
      armLeft: this.svg.querySelector(".hangman-svg__arm-left"),
      armRight: this.svg.querySelector(".hangman-svg__arm-right"),
      legLeft: this.svg.querySelector(".hangman-svg__leg-left"),
      legRight: this.svg.querySelector(".hangman-svg__leg-right"),
    };
    this.bodyPartsList = [
      "head",
      "body",
      "armLeft",
      "armRight",
      "legLeft",
      "legRight",
    ];
    parentNode.append(this.svg);
  }

  /**
   * Show hangman body part by index
   * @param {number} errorCount Count of errors
   */
  showBodyPart(errorCount) {
    if (errorCount > 0 && errorCount <= this.bodyPartsList.length) {
      const bodyPartElement =
        this.bodyParts[this.bodyPartsList[errorCount - 1]];
      if (bodyPartElement) {
        bodyPartElement.classList.add("visible");
      }
    }
  }

  /**
   * Hide all hangman body parts
   */
  hideAllBodyParts() {
    Object.values(this.bodyParts).forEach((part) => {
      if (part) {
        part.classList.remove("visible");
      }
    });
  }
}
