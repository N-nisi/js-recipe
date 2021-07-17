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

// const genkiFunction = function(number) {
//   for (let n = 1; n <= number; n++) {
//     if (n / 10 === 3 || n % 10 === 3) {
//       console.log(n + "!!!!!!!")
//     } else if (n <= 39 && n > 30) {
//       console.log(n + "!!!!!!!")
//     } else {
//       console.log(n)
//     }
//   }
// }
// genkiFunction(100)

// const genkiFunction = function(number) {
//   for (let i = 1; i <= number; i++) {
//     // i を文字列型に変換して 変数n に入れる
//     let n = String(i)

//     // n が　"3" を含むか indexOf を使って判別
//     if (n.indexOf("3") !== -1) {
//       console.log(i + "!!!!!!!")
//     } else {
//       console.log(i)
//     }
//   }
// }
// genkiFunction(100)

//
// 元気な秒針
const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function() {
  count += 1
  display.textContent = count / 100
}

let id = null

button.onclick = function() {
  if (id === null) {
    id = setInterval(countUp, 10)
    button.textContent = "stop"
  } else {
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
