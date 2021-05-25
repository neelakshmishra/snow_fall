class Ground{
    constructor(x,y,width,hight){
        var Options={
            isStatic:true
        }
        
        this.body=Matter.Bodies.rectangle(x,y,width,hight,Options)
        Matter.World.add(world,this.body)
        this.width = width
        this.height = hight
    }
    display(){
        fill("green")
 rect(this.body.position.x,this.body.position.y,this.width,this.height)
 
 //rect(10,20,1000,20)
    }
}