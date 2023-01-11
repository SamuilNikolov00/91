import EventEmitter from "eventemitter3";
import { Beat } from "./beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();

    this._beat = new Beat();
    this._beat.emit(Beat.events.BIT);
    this._beat.addListener("Beat.events.BIT", this._create);
    this.emit(Application.events.READY);
  }

  _create() {
    const main = document.getElementsByTagName("main")[0];
    const message = document.createElement("div");
    message.classList.add("message");
    main.appendChild(message);
  }
}
