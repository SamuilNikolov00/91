import EventEmitter from "eventemitter3";

export class Beat extends EventEmitter {
    static get events() {
        return {
          BIT: "ready",
        };
      }

  constructor() {
    super();
   
    
  }
}
