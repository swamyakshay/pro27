class bob{
    constructor(x,y){
        
        
        var options={
            restitution=1,
            friction=0,
            dencity
           
        }

        this.bob=Constraint.create(options)
        World.add(world,this.bob)
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        strokeWeight(2);

        var Anchor1X=pointA.x;
        var Anchor2Y=pointA.y;

        var Anchor2X=pointA.x+this.offsetX
        var Anchor2Y=pointA.Y+this.offsetY


        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)
    }
        
    
}