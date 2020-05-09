let angle = 0.0;
let scal = 20;
let speed = 0.08;
let val = 145;
function setup() {
    createCanvas(300, 300);
}
function draw() {
    fill(0, 14);
    rect(10, 0, width, height);
    fill(255);
    noStroke();
    x = val + cos(angle) * scal;
    y = val + sin(angle) * scal;
    ellipse(x, y, 10, 10);
    angle += speed;
}