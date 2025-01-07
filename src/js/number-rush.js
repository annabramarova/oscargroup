export default class numberRush {
  constructor(tagId, options) {
    this.tagId = tagId;
    this.tagName = document.getElementById(tagId); 
    this.speed = options.speed || 20; 
    this.maxNumber = options.maxNumber || 100; 
    this.steps = options.steps || 1; 
    this.scrollActiv = true; 
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
          currentNumber = this.maxNumber; 
        }
        this.tagName.textContent = currentNumber; 
      } else {
        clearInterval(interval); 
      }
    }, this.speed);
  }
}
