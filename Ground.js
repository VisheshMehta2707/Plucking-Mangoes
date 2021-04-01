class Ground
{
    constructor ()
    {
        var Features={
            isStatic:true
            
            }
            this.Ground=Bodies.rectangle(400,780,1200,10,Features)
            World.add(myWorld,this.Ground)  
    }
    display()
    {
        rectMode(CENTER)  
 rect ( this.Ground.position.x,this.Ground.position.y,1200,10) ;
    }
}