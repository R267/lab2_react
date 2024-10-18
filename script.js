// Стрілкова ф-я
const currentYear = new Date().getFullYear();

const introduceYourself = (name, birthYear = null) => {
    let age = birthYear ? currentYear - birthYear : "невідомий";
    return `Я ${name}, мені ${age} років.`;
};

console.log(introduceYourself("Іван", 1985)); 
console.log(introduceYourself("Ірина")); 


// №8
import { people } from './data/people.js';
import { searchInList } from './utils/search.js';

// Перша пошукова операція (успішний пошук)
console.log("Пошук по імені: Іван");
searchInList(people, "name", "Іван")
    .then(results => {
        console.log("Результати пошуку:", results);
        results.forEach(person => {
            console.log(person.greeting());
            console.log(`Стать: ${person.getInfo('gender')}`);
        });
    })
    .catch(error => {
        console.log("Помилка:", error);
    });

// Друга пошукова операція (невдалий пошук)
console.log("Пошук по віку: 100");
searchInList(people, "age", 100)
    .then(results => {
        console.log("Результати пошуку:", results);
        results.forEach(person => {
            console.log(person.greeting());
            console.log(`Стать: ${person.getInfo('gender')}`);
        });
    })
    .catch(error => {
        console.log("Помилка:", error);
    });


