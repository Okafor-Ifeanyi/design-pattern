class Telephone {
    constructor() {
      // Observer is a Set of class functions (singletons)
      this.observers = new Set();
      // phoneBook is a Set of phone numbers (unique)
      this.phoneBook = new Set();
    //   console.log(this.observers)
    }
  
    // this add an observer function
    addObserver(observer) {
      this.observers.add(observer);
    //   console.log(observer)
    }
  
    // this removes an observe
    removeObserver(observer) {
      this.observers.delete(observer);
    }
  
    // this notifies all observers
    notifyObservers(phoneNumber) {
      // using HoF forEach to call observer func update to print console
      this.observers.forEach((observer) => observer.update(phoneNumber));
    }
  
    // this registers a phone number
    registerNumber(phoneNumber) {
      this.phoneBook.add(phoneNumber);
    }
  
    // this removes a phone number
    removeNumber(phoneNumber) {
      this.phoneBook.delete(phoneNumber);
    }
  
    // this dials a phone number
    dialNumber(phoneNumber) {
      if (this.phoneBook.has(phoneNumber)) {
        this.notifyObservers(phoneNumber);
      } else {
        console.log("Error: The number is not registered.");
      }
    }
  }
  
  class Logger {
    constructor(name) {
      this.name = name;
    }
    
    // this update phone number and console logs an input
    update(phoneNumber) {
      console.log(`[${this.name}] Logging: ${phoneNumber} was dialed.`);
    }
  }
  
  class Dialer {
    constructor(name) {
      this.name = name;
    }
    
    update(phoneNumber) {
      console.log(`[${this.name}] Calling: ${phoneNumber}`);
    }
  }
  

  // How to use the classes
  const phoneSystem = new Telephone();
  const logger = new Logger("Logging Service Provider");
  const dialer = new Dialer("Dailing Service Provider");
  
  phoneSystem.addObserver(logger);
  phoneSystem.addObserver(dialer);
  
  phoneSystem.registerNumber("07029741530");
  phoneSystem.dialNumber("07029741530");
  phoneSystem.removeNumber("07029741530")
  phoneSystem.dialNumber("07029741530");