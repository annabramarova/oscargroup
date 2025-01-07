const symbols = [
  { name: 'Bitcoin', symbol: 'btcusdt' },
  { name: 'Litecoin', symbol: 'ltcusdt' },
  { name: 'Chainlink', symbol: 'linkusdt' },
  { name: 'Binance Coin', symbol: 'bnbusdt' },
  { name: 'Solana', symbol: 'solusdt' },
  { name: 'Ethereum', symbol: 'ethusdt' },
];

const updateInterval = 1000;

symbols.forEach((crypto, index) => {
  const socket = new WebSocket(
    `wss://stream.binance.com:9443/ws/${crypto.symbol}@ticker`
  );

  socket.onmessage = function (event) {
    const data = JSON.parse(event.data);

    const cryptoData = {
      name: crypto.name,
      price: parseFloat(data.c).toFixed(2), 
      change: parseFloat(data.P).toFixed(2), 
    };

    setTimeout(() => {
      updateCryptoSlide(
        `.advantage-signup-slide:nth-child(${index + 1})`,
        cryptoData
      );
    }, index * updateInterval); 
  };
});

function updateCryptoSlide(selector, cryptoData) {
  const slide = document.querySelector(selector);

  if (slide) {
    const valueElement = slide.querySelector('.crypto-value');
    updateWithAnimation(valueElement, `$${cryptoData.price}`);

    const percentElement = slide.querySelector('.crypto-percent');
    updateWithAnimation(percentElement, `${cryptoData.change}%`);
  }
}

function updateWithAnimation(element, newValue) {
  if (!element) return;

  const oldValue = parseFloat(element.textContent.replace(/[$,%]/g, ''));
  const newNumericValue = parseFloat(newValue.replace(/[$,%]/g, ''));

  if (oldValue !== newNumericValue) {
    element.textContent = newValue;

    element.classList.remove('up', 'down');

    if (newNumericValue > oldValue) {
      element.classList.add('up');
    } else if (newNumericValue < oldValue) {
      element.classList.add('down');
    }

    setTimeout(() => {
      element.classList.remove('up', 'down');
    }, 300);
  }
}
