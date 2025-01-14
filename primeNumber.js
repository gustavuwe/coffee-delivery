function isPrime(num) {
  if (num == 0) {
    return false
  }
  
  let divisorsCount = 0

  for (let i=1;i <= num;i++) {
    let restOfDivision = num / i;
    const isNumberInteger = Number.isInteger(restOfDivision)
    
    if (isNumberInteger) {
      divisorsCount++
    }
  }
  
  if (divisorsCount == 2) { // if its divisible by 1 and itself then return its a prime number
    return true
  } else {
    return false
  }
}

const response = isPrime(5)
console.log(response)