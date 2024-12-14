function getSortedArray(array, key) {
    const n = array.length;

    for (let i = 0; i < n; i++) {
        let swapped = false; 
        
        for (let j = 0; j < n - i - 1; j++) {
            if (typeof array[j][key] === 'string' && typeof array[j + 1][key] === 'string') {
                if (array[j][key] > array[j + 1][key]) {
                    const temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    swapped = true;
                }
            } else if (typeof array[j][key] === 'number' && typeof array[j + 1][key] === 'number') {
                if (array[j][key] > array[j + 1][key]) {
                    const temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    swapped = true;
                }
            }
        }
        
        if (!swapped) {
            break;
        }
    }
    
    return array;
}

const books = [
    { title: "Гарри Поттер и философский камень", year: 1997 },
    { title: "Властелин колец", year: 1954 },
    { title: "1984", year: 1949 },
    { title: "Убик", year: 1969 },
    { title: "451 градус по Фаренгейту", year: 1953 }
];

// Сортировка по году издания
const sortedByYear = getSortedArray(books, 'year');
console.log("Сортировка по году издания:");
sortedByYear.forEach(book => console.log(`Название: ${book.title}, Год издания: ${book.year}`));

// Сортировка по названию
const sortedByTitle = getSortedArray(books, 'title');
console.log("\nСортировка по названию:");
sortedByTitle.forEach(book => console.log(`Название: ${book.title}, Год издания: ${book.year}`));
