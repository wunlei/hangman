import BaseElement from "./base-element.js";
export default class Loader {
    loaderContainer;
    constructor(parentNode) {
        this.loaderContainer = new BaseElement({
            classNames: ["loader", "loader_hidden"],
            parentNode: parentNode,
        });
        new BaseElement({
            parentNode: this.loaderContainer.getNode(),
            classNames: ["loader__spinner"],
            tagName: "span",
        });
    }
    async isReady() {
        // let ready = await document.fonts.ready;
        return document.fonts.ready;
    }
    async isPicReady() {
        const img = document.createElement("img");
        img.src = "./src/assets/bg-s.jpg";
        return new Promise((resolve, reject) => {
            img.onload = function load() {
                console.log("image loaded");
                resolve(true);
            };
            img.onerror = function error() {
                reject(Error('Failed to load img'));
            };
        });
    }
    async appReady() {
        this.loaderContainer.removeClass("loader_hidden");
        await Promise.allSettled([this.isPicReady(), this.isReady()]);
        this.loaderContainer.addClass("loader_hidden");
        console.log("appReady");
    }
}
