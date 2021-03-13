class Box {
    constructor (x,y,width,height) {
var options = {
    restitution:1,
    friction:0.5,
    density:0.04
}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world,this.body);
    }
    display(){
        var p = this.body.angle;
push();
translate(this.body.position.x,this.body.position.y);
rotate(p)
rectMode(CENTER);
fill("white");
rect(0,0,this.width,this.height);
pop();

    }
}