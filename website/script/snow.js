var canvas = document.body.appendChild( document.createElement( 'canvas' ) ),
    context = canvas.getContext( '2d' );
context.globalCompositeOperation = 'lighter';
canvas.width = 1280;
canvas.height = 800;
canvas.style.position= "absolute";
canvas.style.zIndex = 14;

draw();

var textStrip = ['1', '0'];

var snowFlake = 250;
var stripX = new Array();
var stripY = new Array();
var dY = new Array();
var stripFontSize = new Array();

for (var i = 0; i < snowFlake; i++) {
    stripX[i] = Math.floor(Math.random()*1265);
    stripY[i] = -100;
    dY[i] = Math.floor(Math.random()*10)+3;
    stripFontSize[i] = Math.floor(Math.random()*16)+8;
}

var theColors = ['#FFF'];

var elem, context, timer;

function drawStrip(x, y) {
    for (var k = 0; k < 1; k++) {
        var randChar = textStrip[Math.floor((Math.random()*2))];
        if (context.fillText) {
           context.fillStyle = theColors[0];
           context.fillText(randChar, x, y);
        }
        y -= stripFontSize[k];
    }
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.shadowOffsetX = context.shadowOffsetY = 0;
    context.shadowBlur = 8;
    context.shadowColor = '#000';

    for (var j = 0; j < snowFlake; j++) {
        context.textBaseline = 'top';
        context.textAlign = 'center';

        if (stripY[j] > 1358) {
            stripX[j] = Math.floor(Math.random()*canvas.width);
            stripY[j] = -100;
            dY[j] = Math.floor(Math.random()*7)+3;
            stripFontSize[j] = Math.floor(Math.random()*16)+8;
            drawStrip(stripX[j], stripY[j]);
        } else
        {
          drawStrip(stripX[j], stripY[j]);
        }

        stripY[j] += dY[j];
    }
  setTimeout(draw, 70);
}
