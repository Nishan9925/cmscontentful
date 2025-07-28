// src/abstracts/Singleton.js

export default class Singleton {
  constructor() {
    const Class = this.constructor
    if (!Class.instance) {
      Class.instance = this
    }
    return Class.instance
  }
}
