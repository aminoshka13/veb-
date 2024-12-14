function minDigit(x) {
    if (x < 0) {
      throw new Error('Число не может быть отрицательным');
    }
  
    let min = 9;
  
    while (x > 0) {
      let digit = x % 10;
      if (digit < min) {
        min = digit;
      }
      x = Math.floor(x / 10);
    }
  
    return min === 9 ? 0 : min; 
  }
  
  console.log(minDigit(5829));
  console.log(minDigit(4321));
  console.log(minDigit(7000)); 