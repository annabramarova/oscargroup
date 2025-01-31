const symbols = [
  { name: 'Bitcoin', symbol: 'btcusdt', initialValue: '$94,857.62' },
  { name: 'Litecoin', symbol: 'ltcusdt', initialValue: '$131.92' },
  { name: 'Chainlink', symbol: 'linkusdt', initialValue: '$24.90' },
  { name: 'Binance Coin', symbol: 'bnbusdt', initialValue: '$652.78' },
  { name: 'Solana', symbol: 'solusdt', initialValue: '$187.81' },
  { name: 'Ethereum', symbol: 'ethusdt', initialValue: '$3,278.80' },
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
          <span class="crypto-percent">1,5%</span>
          <img src="${arrowImage}" alt="icon" class="change-arrow" width="22" height="22">
        </div>
      </div>
      <span class="crypto-value">${crypto.initialValue}</span>
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

let updateTimeout;

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

  if (!updateTimeout) {
    updateTimeout = setTimeout(() => {
      updateAllCryptoSlides();
      updateTimeout = null;
    }, 500);
  }
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
    const percentElement = slide.querySelector('.crypto-percent');

    updateWithSyncAnimation(valueElement, percentElement, cryptoData);
  }
}

function updateWithSyncAnimation(valueElement, percentElement, cryptoData) {
  if (!valueElement || !percentElement) return;

  const oldValue = parseFloat(valueElement.textContent.replace(/[$,%]/g, ''));
  const newPrice = parseFloat(cryptoData.price);
  const newChange = parseFloat(cryptoData.change);

  if (isNaN(oldValue) || oldValue !== newPrice) {
    valueElement.textContent = `$${cryptoData.price}`;
    percentElement.textContent = `${cryptoData.change}%`;

    const slide = valueElement.closest('.advantage-signup-slide');

    slide.classList.remove('up', 'down');

    if (newChange > 0) {
      slide.classList.add('up');
    } else if (newChange < 0) {
      slide.classList.add('down');
    }

    // Удаляем классы после завершения анимации
    setTimeout(() => {
      slide.classList.remove('up', 'down');
    }, 3000);
  }
}
