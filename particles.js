class Particle{
    constructor(x,y){
        var options={
            restitution:0.4
            //debug:true
        }

        this.body=Bodies.circle(x,y,10,options);
        this.radius=10;
        this.color=color(random(10,245),random(10,245),random(10,245));
        World.add(world,this.body);
    }

display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    noStroke();
          fill(this.color);
          ellipseMode(RADIUS);
          ellipse(0, 0, 10, 10);
          console.log(this.body.position.y);
          pop();
}
}