
  class Box3 {
    constructor(x,y,width,height) {
      var options = {
          'restitution':0.4,
            'friction':1
          }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visiblity=255;
      World.add(world, this.body);
    }
    display(){

      if((this.body.speed)<3)
      {
        var angle = this.body.angle;
            var pos= this.body.position;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill("pink");
            rect(0,0,this.width, this.height);
            pop();
      }
      else{
      World.remove(world,this.body)  
          }
          };}