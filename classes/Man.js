import Human from './Human.js';

export default class Man extends Human {
    constructor(name, age, weight) {
        super(name, age, weight, 'man');  
    }

    greeting() {
        return `Привіт! Я ${this.name}, мені ${this.age} років.`;
    }
}
