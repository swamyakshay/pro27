class Roof {

    constructor(x,y,width,height){
        this.body=Bodies.rect(x,y,width,height,{isstatic:true})
        this.height=height
        this.width=width
        World.add(world,this.body)
    }

    display(){
        push()
        rectMode(CENTER)
        fill(128,128.128)
        rect(this.position.body.x,this.body.position.y,this.width,this.height)
        pop();
    }

}