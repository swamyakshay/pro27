class rope{
    constructor(body1,body2,offsetX,offsetY){
        
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:bodyA,
            bodyB:bodyB,

            pointB:{X:this.offsetX,Y:offsetY}
           
        }

        this.rope=Constraint.create(options)
        World.add(world,this.rope)
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