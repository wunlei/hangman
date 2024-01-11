// import Loader from "./components/loader.js";
import Controller from "./control.js";
import State from "./state.js";
import View from "./view.js";

export default class App {
  constructor() {
    this.state = new State();
    this.view = new View({ state: this.state, parentNode: document.body });
    this.controller = new Controller(this.state, this.view);
    // this.loader = new Loader(document.body);
    // this.loader.appReady();
  }
}
