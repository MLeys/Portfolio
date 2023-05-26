const SPEED = 0.02;

export default class Paddle {
  constructor(paddleElm) {
    this.paddleElm = paddleElm;
    this.reset();
  }; 

  get position() {
    return parseFloat(getComputedStyle(this.paddleElm).getPropertyValue("--position"));
  };

  set position(value) {
    this.paddleElm.style.setProperty("--position", value)
  };

  rect() {
    return this.paddleElm.getBoundingClientRect();
  }

  reset() {
    this.position = 50;

  };

  update(delta, ballHeight) {
    // allows comp paddle lmited speed/time to get to ball so cant always win potentially
    this.position += SPEED * delta * (ballHeight - this.position)
  };

};