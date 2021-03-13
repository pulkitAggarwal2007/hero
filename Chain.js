class Chain{
    constructor(bodyA,pointB){
var options = {
    stiffness:0.04,
    length:250,
    bodyA : bodyA,
    pointB : pointB
}
this.rope = Constraint.create(options);
this.pointB = pointB;
World.add(world,this.rope);

    }
    display(){
push();
fill("blue")
stroke("blue")
strokeWeight(4)
line(this.pointB.x,this.pointB.y,this.rope.bodyA.position.x,this.rope.bodyA.position.y)
pop();

    }
}