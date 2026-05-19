let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let isDrawing = false;
let currentColor = "black";


function startDrawing(event) {
    isDrawing = true;
    let x = event.offsetX;
    let y = event.offsetY;


    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = currentColor;
    ctx.fillStyle = currentColor;

    ctx.beginPath();
    ctx.moveTo(x, y);
}


function draw(event) {
    if (!isDrawing) return;
    let x = event.offsetX;
    let y = event.offsetY;
    ctx.lineTo(x, y);
    ctx.stroke();
}


function stopDrawing() {
    isDrawing = false;
}


function changeColor(color) {
    currentColor = color;
}

