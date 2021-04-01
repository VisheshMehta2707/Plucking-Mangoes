class Ball
{
    constructor (x,y,r)
    {
        var Features={
            isStatic:false,
            restitution:0.5
            }
            this.Ball=Bodies.circle( x,y,r,Features)
            World.add(myWorld,this.Ball)
            this.r = r  
    }
    display()
    {
        push ()
        translate (this.Ball.position.x,this.Ball.position.y)
        rotate (this.Ball.angle)
                    imageMode(CENTER)  
 image(BallImage,0,0,50,50);
    pop ()
    }
}