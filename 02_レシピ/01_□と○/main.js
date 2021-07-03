const figure = document.getElementById("figure")

// addとremove
// circleButton.onclick = function() {
//   // figureにroundedクラスを追加
//   figure.classList.add("rounded")
// }
// squareButton.onclick = function() {
//   // figureからroundedクラスを削除
//   figure.classList.remove("rounded")
// }

figure.onclick = function() {
  figure.classList.toggle("rounded")
}
