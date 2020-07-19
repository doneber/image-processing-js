let img = new Image();
img.src = 'pikachu.jpg';

img.style.width = 500;
img.style.height = 500;

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');



img.onload = function () {
  ctx.drawImage(img, 0, 0, 500, 500);
  img.style.display = 'none';
};

var loadFile = function(event) {
	img.src = URL.createObjectURL(event.target.files[0]);
	ctx.drawImage(img, 0, 0, 500, 500);
};
var kernel = [
  -1, -1, -1,
  -1, 8, -1,
  -1, -1, -1,
]
function multiplicacion(k, m) {
  return k[0] * m[0] + k[1] * m[1] + k[2] * m[2] + k[3] * m[3] + k[4] * m[4] + k[5] * m[5] + k[5] * m[5] + k[6] * m[6] + k[7] * m[7] + k[8] * m[8];
}
function clickMe() {
  let miCanvas = document.getElementById('miCanvas');
  let miCtx = miCanvas.getContext('2d');
  const ancho =500
  const alto =500

  let matriz = new Array();
  console.log("gris..");
  for (let i = 0; i < alto; i++) {
    matriz.push(new Array())
    for (let j = 0; j < ancho; j++) {
      const pixel = ctx.getImageData(i, j, 1, 1).data;
      let promedio = (pixel[0] + pixel[1] + pixel[2]) / 3
      promedio = promedio/255
      matriz[i].push(promedio)
    }
  }

  for (let y = 1; y < alto-1; y++) {
    for (let x = 1; x < ancho-1; x++) {
      const m1 = [matriz[x - 1][y + 1], matriz[x][y + 1], matriz[x + 1][y + 1], matriz[x - 1][y], matriz[x][y], matriz[x + 1][y], matriz[x - 1][y - 1], matriz[x][y - 1], matriz[x + 1][y - 1]]
      const color = multiplicacion(kernel, m1)
      let c = 255
      if(color>0)
        c=0
      let rgba = 'rgba(' + c + ', ' + c +
        ', ' + c + ',1)';
      miCtx.fillStyle = rgba;      
      miCtx.fillRect(x, y, 1, 1);
    }
  }
}