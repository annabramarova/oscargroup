export default class numberRush {
  constructor(tagId, options) {
    this.tagId = tagId;
    this.tagName = document.getElementById(tagId); // ищем элемент по ID
    this.speed = options.speed || 20; // скорость
    this.maxNumber = options.maxNumber || 100; // конечное число
    this.steps = options.steps || 1; // шаг
    this.scrollActiv = true; // активировать анимацию только один раз
    this.init();
  }

  init() {
    if (!this.tagName) {
      console.error(`Element with ID "${this.tagId}" not found.`);
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && this.scrollActiv) {
          this.scrollActiv = false;
          this.animate();
        }
      });
    });

    observer.observe(this.tagName);
  }

  animate() {
    let currentNumber = 0;

    const interval = setInterval(() => {
      if (currentNumber < this.maxNumber) {
        currentNumber += this.steps;
        if (currentNumber > this.maxNumber) {
          currentNumber = this.maxNumber; // защита от перепрыгивания
        }
        this.tagName.textContent = currentNumber; // обновляем текст
      } else {
        clearInterval(interval); // останавливаем анимацию
      }
    }, this.speed);
  }
}
