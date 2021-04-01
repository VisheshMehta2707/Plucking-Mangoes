class Box
{
    constructor (x,y,w,h)
    {
        var Features={
            isStatic:true,
            friction:1
            }
            this.Box=Bodies.rectangle( x,y,w,h,Features)
            World.add(myWorld,this.Box)
            this.w = w
            this.h = h  
    }
    display()
    {
        push ()
        translate (this.Box.position.x,this.Box.position.y)
        rotate (this.Box.angle)
                    rectMode(CENTER)  
 rect( 0,0,this.w,this.h);
    pop ()
    }
}