const symbols = [
  { name: 'Bitcoin', symbol: 'btcusdt' },
  { name: 'Litecoin', symbol: 'ltcusdt' },
  { name: 'Chainlink', symbol: 'linkusdt' },
  { name: 'Binance Coin', symbol: 'bnbusdt' },
  { name: 'Solana', symbol: 'solusdt' },
  { name: 'Ethereum', symbol: 'ethusdt' },
];

const sliderWrap = document.querySelector('.slider-markets-slides');

// Умножаем массив на 4 для создания четырех экземпляров каждого символа
const duplicatedSymbols = Array(4).fill(symbols).flat();

function createSlides() {
  sliderWrap.innerHTML = '';

  duplicatedSymbols.forEach(crypto => {
    const slide = document.createElement('div');
    slide.classList.add('advantage-signup-slide');

    let arrowImage = '/img/slider/arrow-down.svg';
    if (crypto.symbol === 'linkusdt') {
      slide.classList.add('chainlink');
      arrowImage = '/img/slider/arrow-white.svg';
    }

    slide.innerHTML = `
      <div class="advantage-crypto">
        <span class="crypto-name">${crypto.name}</span>
        <div class="crypto-change">
          <span class="crypto-percent">-</span>
          <img src="${arrowImage}" alt="icon" class="change-arrow" width="22" height="22">
        </div>
      </div>
      <span class="crypto-value">-</span>
    `;
    sliderWrap.appendChild(slide);
  });
}

createSlides();

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
  duplicatedSymbols.forEach((crypto, index) => {
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

    element.classList.remove('up', 'down');

    if (newNumericValue > oldValue) {
      element.classList.add('up');
    } else if (newNumericValue < oldValue) {
      element.classList.add('down');
    }

    setTimeout(() => {
      element.classList.remove('up', 'down');
    }, 3000);
  }
}
