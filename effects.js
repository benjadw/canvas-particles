// import * as utils from './utils';
import Particle from './particle';
let animationId = null;
class Effect {
  constructor(particleAmount){
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    this.particleArray = [];
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight; 
    this.mouseX = window.innerWidth / 2;
    this.mouseY = window.innerHeight / 2;
    this.particleAmount = particleAmount;
  }

  startEffect() {
    window.addEventListener('mousemove', ev=>this.mousePosition(ev));
    this.drawEffect();
  }
  
  stopEffect(){
    cancelAnimationFrame(animationId);
  }

  mousePosition(ev) {
    this.mouseX = ev.x;
    this.mouseY = ev.y;
  }
}

export class BloodEffect extends Effect{

  constructor(){
    super(10);
  }
  
  drawEffect() {
    this.particleArray
    .filter((particle) => particle.lifeCounter > 0)
    .forEach((particle) => particle.update().draw());
    
    for(let i = 0;i < this.particleAmount;i++){
      this.particleArray.push(new Particle(this.ctx, 1, this.mouseX, this.mouseY,true, '#8a0303',100,0.4,0.2,3));
    }
    
    animationId = requestAnimationFrame(()=>this.drawEffect());
  }
}

export class trailEffect extends Effect{

  constructor(){
    super(10);
  }
  
  drawEffect() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particleArray
    .filter((particle) => particle.lifeCounter > 0)
    .forEach((particle) => particle.update().draw());
    
    for(let i = 0;i < this.particleAmount;i++){
      this.particleArray.push(new Particle(this.ctx, 0, this.mouseX, this.mouseY,undefined,undefined,200,undefined,undefined,5));
    }
    
    animationId = requestAnimationFrame(()=>this.drawEffect());
  }
}