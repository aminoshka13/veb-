function pluralizeRecords(n) {
    let form;
    if (n % 10 === 1 && n % 100 !== 11) {
        form = "запись";
    } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
        form = "записи";
    } else {
        form = "записей";
    }

    return `В результате выполнения запроса было найдено ${n} ${form}`;
}

console.log(pluralizeRecords(5)); 
console.log(pluralizeRecords(104));
console.log(pluralizeRecords(11));