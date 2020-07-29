class Ground {
constructor(x,y){
    var options={
        isStatic:true
    }
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=480;
this.height=10;
World.add(world,this.body);
}
display(){
    var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);

}
}