class Plinko{
    constructor(x,y,radius){
        var opyions={
            isStatic:true
        }

        this.body=Bodies.circle(x,y,radius,opyions);
        this.radius=10;
        World.add(world,this.body);
    }

display(){
    var pos=this.body.position;
    fill("white");
    ellipseMode(RADIUS);
          ellipse(pos.x, pos.y, 10, 10);
}
}