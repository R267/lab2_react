import Human from './Human.js';

export default class Woman extends Human {
    constructor(name, age, weight) {
        super(name, age, weight, 'woman'); 
    }

    greeting() {
        return `Привіт! Я ${this.name}.`;
    }
}