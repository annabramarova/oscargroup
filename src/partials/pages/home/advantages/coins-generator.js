function updateMarketData() {
  // Получаем данные о текущем изменении цены (в реальной ситуации тут будет API запрос)
  const btcPrice = document.getElementById('btc-price');
  const btcChange = document.getElementById('btc-change');
  const btcIndicator = document.getElementById('btc-indicator');

  const randomChange = (Math.random() * 10 - 5).toFixed(2); 

  btcPrice.textContent = (50000 + (50000 * randomChange) / 100).toFixed(2); 
  btcChange.textContent = `${randomChange > 0 ? '+' : ''}${randomChange}%`; 

  if (randomChange > 0) {
    btcIndicator.classList.add('up');
    btcIndicator.classList.remove('down');
    btcChange.classList.add('up');
    btcChange.classList.remove('down');
  } else {
    btcIndicator.classList.add('down');
    btcIndicator.classList.remove('up');
    btcChange.classList.add('down');
    btcChange.classList.remove('up');
  }
}

setInterval(updateMarketData, 3000);
