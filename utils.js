export function getRandomColor(){
  return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

export function getHexOpacity(initialValue, value){
  return Math.floor((255*value/initialValue)).toString(16).padStart(2,'0');
}