function gcd(a, b) {
    if (a < 0 || b < 0) {
      throw new Error('Числа не могут быть отрицательными');
    }
  
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
  
    return a;
  }
  
  console.log(gcd(48, 18)); 
  console.log(gcd(101, 103));