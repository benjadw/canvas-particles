import * as utils from './utils';

export default class Particle {
  constructor(
    ctx,
    type = 0,// 0 === rectangles, 1 === circles
    x = 0,
    y = 0,
    fallParticles = false,
    color = utils.getRandomColor(),
    initialLifeCounter = 50,
    maxVelY = 1,
    maxVelX = 1,
    size = 2
    ) {
    this.maxVelX = maxVelX;
    this.maxVelY = maxVelY;
    this.initialLifeCounter = initialLifeCounter;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.size = Math.random() * size;
    this.width = this.size;
    this.height = this.size;
    this.vx = Math.random() * this.maxVelX - (this.maxVelX/2);
    this.vy = Math.random() * this.maxVelY - (fallParticles ? (this.maxVelY*-2): (this.maxVelY/2));
    this.lifeCounter = this.initialLifeCounter;
    this.color = color;
    this.type = type;
  }

  draw() {
    this.ctx.fillStyle = this.color+utils.getHexOpacity(this.initialLifeCounter,this.lifeCounter);
    
    if(this.type){
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
      this.ctx.fill();
    }else{
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.lifeCounter--;
    return this;
  }
}
