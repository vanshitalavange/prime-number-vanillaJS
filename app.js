var inputNumber = document.querySelector("#number");
var btnCheck = document.querySelector("#btn-check");
var output = document.querySelector("#output");

function isPrime(number) {
  var flag = 0;
  if (number === 1 || number === 0) {
    flag = 1;
  } else if (number === 2) {
    flag = 2;
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        flag = 3;
        break;
      } else {
        flag = 2;
      }
    }
  }
  return flag;
}
