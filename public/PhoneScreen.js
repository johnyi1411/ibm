const fizzbuzz = () => {
  for (let i = 1; i <= 100; i++) {
    let result = '';
    if (i % 3 === 0 || i % 5 === 0) {
      if (i % 3 === 0) {
        result += 'fizz';
      }
      if (i % 5 === 0) {
        result += 'buzz';
      }
    } else {
      result += i;
    }
    console.log(result);
  }
}; 

fizzbuzz();

// iterate 1 to 100
// conditional on %3 or %5 === 0
// print fizz or buzz