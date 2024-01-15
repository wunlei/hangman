const MAX_ERRORS = 6;
const data = {
  words: [
    { word: "Wastel", description: "Fine white bread" },
    {
      word: "Surcoat",
      description:
        "Loose fabric overgarment worn over armour, often bearing a knight’s arms",
    },
    {
      word: "Vambrace",
      description: "Piece of armour protecting the lower arm",
    },
    {
      word: "Simony",
      description: "The buying and selling of ecclesiastical positions",
    },
    {
      word: "Reredos",
      description: "Screen covering the wall behind an altar in a church",
    },
    {
      word: "Pattens",
      description:
        "Raised wooden shoes for wearing over indoor slippers when walking outside",
    },
    {
      word: "Pardoner",
      description: "A secular clerk or friar who carried indulgences",
    },
    {
      word: "Cloister",
      description: "A covered area in a monastery used for study",
    },
    {
      word: "Cottar",
      description:
        "Peasant of lower rank, with a cottage, but with little or no land",
    },
    { word: "Destrier", description: "Warhorse" },
    {
      word: "Merchet",
      description:
        "The sum commonly paid by a villager to his lord when the villager’s daughter married a man from another manor",
    },
    {
      word: "Kaiage",
      description:
        "Toll paid on loading or unloading goods, especially at a market town or wharf",
    },
    {
      word: "Abbey",
      description: "Monastic community of either monks or nuns",
    },
    {
      word: "Alms",
      description: "Charitable gift of money or goods to the poor and needy",
    },
    {
      word: "Bard",
      description:
        "A poet, especially one who writes impassioned, lyrical, or epic verse",
    },
    { word: "Lancet", description: "Tall narrow window with pointed head" },
    {
      word: "Mead",
      description: "Wine made by fermenting a solution of honey",
    },
    {
      word: "Vassal",
      description:
        "Man who agreed to fight for a king or lord when needed in exchange for land to live on",
    },
    {
      word: "Rampart",
      description: "Defensive earth or stone wall surrounding castle",
    },
    {
      word: "Joust",
      description:
        "Tournament or combat of two mounted knights, tilting using lances",
    },
  ],
};

export default class Controller {
  constructor(state, view) {
    this.state = state;
    this.view = view;
    this.handleKeyBtnClick = this.handleKeyBtnClick.bind(this);
    this.guessLetter = this.guessLetter.bind(this);
    this.handleGameReset = this.handleGameReset.bind(this);
    this.startGame();
  }

  startGame() {
    this.fetchAndSetWords();
    this.view.handleKeyBtnClick(this.handleKeyBtnClick);
    this.handleKeydown();
    this.view.handlePlayAgainBtnClick(this.handleGameReset);
  }

  async fetchAndSetWords() {
    //  const data = await fetchData("./src/assets/data.json");
    this.state.setWords(data.words);
    this.view.handleWordUpdate();
  }

  handleKeyBtnClick(letter) {
    this.guessLetter(letter);
  }

  handleKeydown() {
    document.addEventListener("keydown", (e) => {
      if (this.state.getIsGameEnded()) {
        return;
      }

      const dict = "QWERTYUIOPASDFGHJKLZXCVBNM";
      if (dict.includes(e.key.toUpperCase())) {
        this.guessLetter(e.key);
      } else {
        if (e.code.startsWith("Key")) {
          this.view.toggleToast();
        }
      }
    });
  }

  handleGameLost() {
    this.state.setIsGameEnded(true);
    this.view.handleGameLost();
  }

  handleGameWin() {
    this.state.setIsGameEnded(true);
    this.view.handleGameWin();
  }

  handleGameReset() {
    this.state.resetCurrentData();
    this.view.handleGameReset();
  }

  guessLetter(letter) {
    const word = this.state.getCurrentWord().word;
    if (word) {
      const l = letter.toUpperCase();
      // for keydown event
      if (this.state.getPressedKeys().includes(l)) {
        return;
      }
      // if guess is correct
      if (word.includes(l)) {
        this.state.updatePressedKeys(l);

        if (word.indexOf(l) === word.lastIndexOf(l)) {
          this.view.handleLetterGuess(l);
        } else {
          this.view.handleSeveralLettersGuess(l);
        }

        this.view.handleCorrectGuess(l);
        this.state.handleLetterGuess(l);

        const remainingLetters = this.state.getRemainingLetters();
        // check if game win
        if (remainingLetters !== null) {
          if (remainingLetters.length === 0) {
            this.handleGameWin();
          }
        }
      } else {
        // if guess is wrong
        this.state.updateErrorsCount(1);
        this.view.handleErrorGuess(l, this.state.getErrorsCount());

        if (this.state.getErrorsCount() >= MAX_ERRORS) {
          this.handleGameLost();
        }
      }
    }
  }
}
