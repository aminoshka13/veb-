function pow(x, n) {
    if (n < 1) {
      throw new Error('Показатель степени должен быть натуральным числом (n >= 1)');
    }
  
    let result = 1;
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  console.log(pow(2, 3));
  console.log(pow(5, 1));
  console.log(pow(3, 4));