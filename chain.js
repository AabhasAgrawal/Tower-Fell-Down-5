class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,                        
            stiffness: 0.04,
            length: 50
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if (this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
        }
    }
    
    fly(){
   this.sling.bodyA=null 

    }
    attach (newBody) {

        this.sling.bodyA=newBody
    
        }
    
}
 