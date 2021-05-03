
    class Launcher { constructor(bodyA, pointB) {
      var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.1,
            length: 1
        }
        this.Launch = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.Launch);
     }
        fly(){
            this.Launch.bodyA =null;
        }
        
attach(body){
    this.Launch.bodyA=body;
     }

display() {
 if(this.Launch.bodyA) {
 var pointA = this.Launch.bodyA.position;
 var pointB = this.pointB;

strokeWeight(3);
line(pointA.x, pointA.y, pointB.x, pointB.y);
 }
 }
}
