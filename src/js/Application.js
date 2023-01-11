import EventEmitter from "eventemitter3";
import {Beat} from "./beat.js";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();

    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;
   let objCount = {count:0};
    this._beat = new Beat();
    this._beat.on('bit', () => {
      console.log('an event occurred!');
      this._create(objCount,lyrics);
    });
for(let l of lyrics){
   
  this._beat.emit(Beat.events.BIT)
}
   


    this.emit(Application.events.READY);
  }

  _create(count,lyrics){
    if(count >= lyrics.length){
      return;
    }
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = lyrics[count.count++];
    document.querySelector(".main").appendChild(message);
  }
}
