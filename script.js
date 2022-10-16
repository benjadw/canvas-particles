import * as effects from './effects';

let currentEffect = null;
const radios = document.querySelectorAll('input');
radios.forEach((radio) => radio.addEventListener('change', initEffect));

function initEffect() {
  currentEffect?.stopEffect();
  console.log(this.value);

  switch (this.value) {
    case 'blood':
      currentEffect = new effects.BloodEffect();
      break;
    case 'trail':
      currentEffect = new effects.trailEffect();
      break;
  }
  currentEffect.startEffect();
}
