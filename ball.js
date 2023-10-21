class Ball{
    constructor(x,y,r,colour){
        this.radius = r
        this.colour = colour

        var options = {
            density:0.01,restitution:1
            
        }

        this.body = Matter.Bodies.circle(x,y,this.radius,options)
        World.add(world,this.body)
    }
    showBall(){
        fill (this.colour)
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
}