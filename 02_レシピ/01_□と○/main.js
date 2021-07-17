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

// figure.onclick = function() {
//   figure.classList.add("triangle")
// }

figure.onclick = function() {
  if (figure.classList.contains("square") == true) {
    figure.classList.add("rounded")
  } else if (figure.classList.contains("rounded") == true) {
    figure.classList.add("triangle")
  } else {
    figure.classList.remove("triangle")
    figure.classList.add("square")
  }
}
