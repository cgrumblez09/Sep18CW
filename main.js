// Your task is to write function factorial.

function factorial(n){
  let res = 1;
  for(let i = n; i > 0; i--){
    res *= i
  }
  return res
}

// const factorial = n => n ? factorial(n - 1) * n : 1;

// function factorial(n){
//   let answer = 1;
  
//   while (n > 0) {
//     answer *= n;
//     n--;
//   }
  
//   return answer;
// }