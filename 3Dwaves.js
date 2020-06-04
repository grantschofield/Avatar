let L;
let w = 0
let L1;
let offset2 = 0
let offset = 0
let a = 100
function setup() {

createCanvas(400, 400, WEBGL);
   //perspective(PI / 3.0, width / height, 0.1, 500);
  ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 500);
}

function draw() {
  background(220);
  rotateY(PI/(30))
  rotateX(PI/(6))
  normalMaterial();
for (let i = 0; i < 9; i++) {
L = (a*sin(radians(w-offset)))
w = 9*L/1000
box(18, L, 20 )
translate(20,0)
  offset += 4
a += 4*L/30
}
a = 100
w = 9
  translate(-180,0)
for (let i = 0; i < 9; i++) {
L1 = (a*sin(radians(w-offset2)))
w = 9*L1/1000
box(18, L1, 20 )
translate(-20,0)

offset2 += 4
a += 4*L1/30
}
offset -= 33
offset2 -= 33
a = 100
}
