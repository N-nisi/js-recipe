const buyButtonTea = document.getElementById("buy-button-tea")
const buyButtonSake = document.getElementById("buy-button-sake")
const displayItems = document.getElementById("display-items")
const addButton = document.getElementById("add-button-100")
const displaySaifu = document.getElementById("display-saifu")
const displayJihankiMoney = document.getElementById("display-jihanki-money")
const oturiButton = document.getElementById("oturi-button")

let saifu = 1000
let jihankiMoney = 0
// buyButtonTea を押した時の処理
buyButtonTea.onclick = function() {
  if (100 <= jihankiMoney) {
    displayItems.textContent += "🍵"
    jihankiMoney -= 100
    displayJihankiMoney.textContent = jihankiMoney
  }
}
buyButtonSake.onclick = function() {
  if (150 <= jihankiMoney) {
    displayItems.textContent += "🍺"
    jihankiMoney -= 150
    displayJihankiMoney.textContent = jihankiMoney
  }
}

addButton.onclick = function() {
  if (saifu >= 100) {
    saifu -= 100
    jihankiMoney += 100
    displaySaifu.textContent = saifu
    displayJihankiMoney.textContent = jihankiMoney
  }
}

oturiButton.onclick = function() {
  saifu = saifu + jihankiMoney
  jihankiMoney = 0
  displaySaifu.textContent = saifu
  displayJihankiMoney.textContent = jihankiMoney
}
