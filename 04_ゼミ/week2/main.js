// 取得
const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-input")

// 保存ボタンを押した後に、メモをHTMLに追加していく。
addButton.onclick = function() {
  // inputタグに入力した内容を取得する
  console.dir(memoInput)
  const text = "こんにちは"

  // textをhtmlに取得する
  const div = document.createElement("div")
  div.textContent = text
}
