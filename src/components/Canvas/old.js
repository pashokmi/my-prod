var starsCount = 800;
var stars = [];
class Star{
	constructor(){

		this.x = random(-width, width);
		this.y = random(-height, height);
		this.z = random(width);
	}
	update(){
		// var speed = map(mouseX, 0, width, 0, 20);
		var speed = 12;
		this.z -= speed;
		if(this.z < 1){
			this.x = random(-width, width);
			this.y = random(-height, height);
			this.z = width;
			
			// You Can Uncomment These -->		
			// this.pz = this.z;

		}
	}
	draw(){
		fill(255);
		noStroke();

		var sx = map(this.x / this.z, 0, 1, 0, width);
		var sy = map(this.y / this.z, 0, 1, 0, height);

		var r = map(this.z, 0, width, 10, 0);
		ellipse(sx, sy, r, r);


		// You Can Uncomment These Too -->		
		// var px = map(this.x / this.pz, 0, 1, 0, width);
		// var py = map(this.y / this.pz, 0, 1, 0, height);
		// stroke(255);
		// line(px, py, sx, sy);
		// this.pz = this.z;
	}
}
function setup(){
	createCanvas(innerWidth, innerHeight);
	for (var i = 0; i < starsCount; i++) {
		stars[i] = new Star();
	}
}


function draw(){
	background(0, 180);
	translate(width/2, height/2);
	for (var i = 0; i < starsCount; i++) {
		stars[i].draw();
		stars[i].update();
	}
}

addEventListener('resize', () => {
	resizeCanvas(innerWidth, innerHeight);
})
