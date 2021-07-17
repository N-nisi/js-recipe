const imageElement = document.getElementById("dog-image")

const button = document.getElementById("koshin-button")

// 指定したサーバーにデータを取りに行く
fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    return res.json() // 結果を json として読み込んで、次の then に渡す
  })
  .then((data) => {
    imageElement.src = data.message // 画像を表示する
  })

// function(){}の場合 thisの振る舞いという点でアロー関数の方が適している。
//   fetch("https://dog.ceo/api/breeds/image/random")
//   .then(function(res) {
//     return res.json()
//   })
//   .then(function(data) {
//     imageElement.src = data.message
//   })

// ワンチャン切り替えボタン
button.onclick = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      imageElement.src = data.message
    })
}
