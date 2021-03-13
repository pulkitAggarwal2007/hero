class Ball {
    constructor (angle) {
var options = {
    frictionaAir:0.05,
    density:1,
    
}
this.image = loadImage("images/Superhero-01.png");
this.body = Bodies.circle(200,200,80,80,angle,options);
this.width = 80;
this.height = 80;
World.add(world,this.body);
    }
    display(){
        var b = this.body.angle;
push();
translate(this.body.position.x,this.body.position.y);
rotate(b);

fill("red");
imageMode(CENTER);
image(this.image,0,0,this.width,this.height);
pop();

    }
}