let y = 10
let x = 0
let z = 400
let v = 10
function setup() {
  createCanvas(400, 400);
background(10,255,244)
}

function draw() {
line(0,x,y,400)
line(400,y,x,0)
line(0,z,v,0)
line(400,z,v,400)
z -= 10
v += 10
x += 10
y += 10

}
