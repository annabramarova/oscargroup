const symbols = [
  { name: 'Bitcoin', symbol: 'btcusdt' },
  { name: 'Litecoin', symbol: 'ltcusdt' },
  { name: 'Chainlink', symbol: 'linkusdt' },
  { name: 'Binance Coin', symbol: 'bnbusdt' },
  { name: 'Solana', symbol: 'solusdt' },
  { name: 'Ethereum', symbol: 'ethusdt' },
];

const socketUrls = symbols.map(crypto => `${crypto.symbol}@ticker`).join('/');

const socket = new WebSocket(
  `wss://stream.binance.com:9443/stream?streams=${socketUrls}`
);

const cryptoDataMap = {};

socket.onmessage = event => {
  const messageData = JSON.parse(event.data);
  const streamName = messageData.stream.split('@')[0];
  const data = messageData.data;

  const cryptoInfo = symbols.find(crypto => crypto.symbol === streamName);

  if (cryptoInfo) {
    cryptoDataMap[cryptoInfo.symbol] = {
      name: cryptoInfo.name,
      price: parseFloat(data.c).toFixed(2),
      change: parseFloat(data.P).toFixed(2),
    };
  }

  updateAllCryptoSlides();
};

function updateAllCryptoSlides() {
  symbols.forEach((crypto, index) => {
    const cryptoData = cryptoDataMap[crypto.symbol];
    if (cryptoData) {
      updateCryptoSlide(
        `.advantage-signup-slide:nth-child(${index + 1})`,
        cryptoData
      );
    }
  });
}

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

    // Get the parent slide element
    const slide = element.closest('.advantage-signup-slide');

    // Remove the previous color classes
    slide.classList.remove('up', 'down');

    if (newNumericValue > oldValue) {
      slide.classList.add('up'); 
    } else if (newNumericValue < oldValue) {
      slide.classList.add('down');
    }

    setTimeout(() => {
      slide.classList.remove('up', 'down');
    }, 2000);
  }
}
