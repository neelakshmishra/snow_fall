class Box{
  constructor(x,y){
      var options={
          isStatic:false,
      }
      this.image = loadImage("snow4.webp");
      var width = 10
      var hieght = 10
      this.body = Matter.Bodies.rectangle(x,y,width,hieght,options);
      Matter.World.add(world,this.body)
      this.width = width
      this.hieght = hieght

  }
  show(){
      push()
      fill("blue")
    rect(this.body.position.x,this.body.position.y,this.width,this.hieght)
    image(this.image,this.body.position.x,this.body.position.y,40,50)
    pop()
  }
}