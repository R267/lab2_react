export function searchInList(list, searchField, searchValue) {
    return new Promise((resolve, reject) => {
        const results = list.filter(person => person[searchField] === searchValue);
        if (results.length > 0) {
            resolve(results);
        } else {
            reject(`За пошуком по ${searchField}: ${searchValue} не знайдено.`);
        }
    });
}