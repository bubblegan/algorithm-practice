

function fibonacci(sequenceNumber) {

  if (sequenceNumber == 0) {
    return 0;
  }

  if (sequenceNumber == 1) {
    return 1;
  }

  

  return (fibonacci(sequenceNumber - 1) + fibonacci(sequenceNumber - 2));

}

console.log(fibonacci(5));