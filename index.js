var img = new Image();
img.src = 'pikachu.jpg';

img.style.width = 600;
img.style.height = 600;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');



img.onload = function() {
  ctx.drawImage(img, 0, 0,600,600);
  img.style.display = 'none';
};
// var color = document.getElementById('color');
// function pick(event) {
//   var x = event.layerX;
//   var y = event.layerY;
//   var pixel = ctx.getImageData(x, y, 1, 1);
//   var data = pixel.data;
//   var rgba = 'rgba(' + data[0] + ', ' + data[1] +
//   ', ' + data[2] + ', ' + (data[3] / 255) + ')';
//   color.style.background =  rgba;
//   color.textContent = rgba;
// }
var miCanvas = document.getElementById('miCanvas');
var miCtx = miCanvas.getContext('2d');
function clickMe() {
  console.log("Pintando..");
  for (let y = 2; y < 300 ; y++) {
    for (let x = 2; x < 300 ; x++) {
      // console.log(`x: ${y}, y: ${x}`);
      
      var pixel = ctx.getImageData(x, y, 1, 1);
      var data = pixel.data;
      
      // var matriz = [
      //   [  [[x-1],[y+1]],   [[x],[y+1]],        [[x+1],[y+1]]       ],
      //   [  [[x-1],[y]],   [[x],[y]],        [[x+1],[y]]       ],
      //   [  [[x-1],[y-1]],   [[x],[y-1]],        [[x+1],[y-1]]       ],
      // ]
      const p0 = ctx.getImageData(x-1, y+1, 1, 1).data;   //* -
      const p1 = ctx.getImageData(x, y+1, 1, 1).data;   //* -1
      const p2 = ctx.getImageData(x+1, y+1, 1, 1).data;   //* -1

      const p3 = ctx.getImageData(x-1, y, 1, 1).data;   //* -1
      const p4 = ctx.getImageData(x, y, 1, 1).data;   //* 8
      const p5 = ctx.getImageData(x+1, y, 1, 1).data;   //* -1

      const p6 = ctx.getImageData(x-1, y-1, 1, 1).data;   //* -1
      const p7 = ctx.getImageData(x, y-1, 1, 1).data;   //* -1
      const p8 = ctx.getImageData(x+1, y-1, 1, 1).data;   //* -1

      const a = (p0[0])*(-1);
      const b = (p1[0])*(-1);
      const c = (p2[0])*(-1);
      const d = (p3[0])*(-1);
      const e = (p4[0])*(8);
      const f = (p5[0])*(-1);
      const g = (p6[0])*(-1);
      const h = (p7[0])*(-1);
      const i = (p8[0])*(-1);

      const red =a+b+c+d+e+f+g+h+i;

      const a1 = (p0[1])*(-1);
      const b1 = (p1[1])*(-1);
      const c1 = (p2[1])*(-1);
      const d1 = (p3[1])*(-1);
      const e1 = (p4[1])*(8);
      const f1 = (p5[1])*(-1);
      const g1 = (p6[1])*(-1);
      const h1 = (p7[1])*(-1);
      const i1 = (p8[1])*(-1);
      const green =a1+b1+c1+d1+e1+f1+g1+h1+i1;

      const a2 = (p0[2])*(-1);
      const b2 = (p1[2])*(-1);
      const c2 = (p2[2])*(-1);
      const d2 = (p3[2])*(-1);
      const e2 = (p4[2])*(8);
      const f2 = (p5[2])*(-1);
      const g2 = (p6[2])*(-1);
      const h2 = (p7[2])*(-1);
      const i2 = (p8[2])*(-1);

      const blue =a2+b2+c2+d2+e2+f2+g2+h2+i2;

            var rgba = 'rgba(' + red + ', ' + green +
            ', ' + blue + ', ' + (data[3] / 255) + ')';

            console.log(rgba);
            miCtx.fillStyle = rgba;
            miCtx.fillRect(x,y,1,1);
        }        
    }

    for (let y = 2; y < 300 ; y++) {
      for (let x = 2; x < 300 ; x++) {
        var pixel = miCtx.getImageData(x, y, 1, 1);
        var data = pixel.data;
        
        var rgba = 'rgba(' + (255-data[0]) + ', ' + (255-data[1]) +
        ', ' + (255-data[2]) + ', ' + (data[3] / 255) + ')';

        console.log(rgba);
        miCtx.fillStyle = rgba;
        miCtx.fillRect(x,y,1,1);
      }
    }
}


// function grices() {
//     console.log("Pintando..");
//     for (let i = 0; i < 300 ; i++) {
//         for (let j = 0; j < 300 ; j++) {
//             // console.log(`x: ${i}, y: ${j}`);
//             var pixel = ctx.getImageData(i, j, 1, 1);
//             var data = pixel.data;
//             let promedio = (data[0]+data[1]+data[2])/3
//             var rgba = 'rgba(' + promedio + ', ' + promedio +
//             ', ' + promedio + ', ' + (data[3] / 255) + ')';
//             console.log(rgba);
//             miCtx.fillStyle = rgba;
//             miCtx.fillRect(i,j,1,1);
//         }        
//     }
// }
