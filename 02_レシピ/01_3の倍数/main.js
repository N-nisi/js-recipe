// 引数 number を受ける関数
// const genkiFunction = function(number) {
//   // n を 1 から、 number まで、値を1ずつ増やしながら、for の {} の中身を繰り返す
//   for (let n = 1; n <= number; n++) {
//     if (n % 3 === 0) {
//       console.log(n + "!!!!!!!")
//     } else {
//       console.log(n)
//     }
//   }
// }
// genkiFunction(100)

//
// FizzBuzz

// const FizzBuzzFunction = function(number) {
//   for (let n = 1; n <= number; n++) {
//     if (n % 5 === 0 && n % 3 === 0) {
//       console.log("FizzBuzz")
//     } else if (n % 3 === 0) {
//       console.log("Fizz")
//     } else if (n % 5 === 0) {
//       console.log("Buzz")
//     } else {
//       console.log(n)
//     }
//   }
// }
// FizzBuzzFunction(100)

//
// 発展 3が好き

const genkiFunction = function(number) {
  // n を 1 から、 number まで、値を1ずつ増やしながら、for の {} の中身を繰り返す
  for (let n = 1; n <= number; n++) {
    if (n / 10 === 3) {
      console.log(n + "!!!!!!!")
    } else if (n % 10 === 3) {
      console.log(n + "!!!!!!!!")
    } else if (n <= 39 && n > 30) {
      console.log(n + "!!!!!!!")
    } else {
      console.log(n)
    }
  }
}
genkiFunction(100)
