class Ground {
    constructor () {
var options = {
    isStatic:true
}
this.body = Bodies.rectangle(600,600,1200,20,options);
this.width = 1200;
this.height = 20;
World.add(world,this.body);
    }
    display(){
push();
rectMode(CENTER);
fill("red");
rect(this.body.position.x,this.body.position.y,this.width,this.height);
pop();

    }
}