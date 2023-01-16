import EventEmitter from "eventemitter3";
import {Beat} from "./Beat.js"


export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();

    this._beat = new Beat();
    
    this.emit(Application.events.READY);
    this.count = 0;
    this._beat.on(Beat.events.BIT,()=>{
      this._create();
    });
  }

  


  _create() {
    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    
    if (this.count >= lyrics.length) {
      this.count = 0;
    }
      
    const message = document.createElement("div");
      message.classList.add("message");
      message.innerText = lyrics[this.count++];
      document.querySelector(".main").appendChild(message);
    }
    
  
}
