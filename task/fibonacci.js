function fibb(n) {
    if (n < 0 || n > 1000) {
        throw new Error("n должно быть в диапазоне от 0 до 1000");
    }

    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

console.log(fibb(0));
console.log(fibb(10)); 
console.log(fibb(1000));