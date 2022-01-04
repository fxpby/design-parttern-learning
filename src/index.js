class Person {
  constructor(name) {
    this.name = name
  }
  getName() { 
    return this.name 
  }
}

const p = new Person('olu cool')
console.log(p)