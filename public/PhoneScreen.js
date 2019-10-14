const fizzbuzz = () => {
  let finalResult = '';
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
    finalResult += result + '\n';
  }
  return finalResult;
}; 

document.getElementById('root').innerHTML = fizzbuzz();
