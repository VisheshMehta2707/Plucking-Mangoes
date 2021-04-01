class Connection
{
    constructor(a,b)
    {
     var Features={
         bodyA:a,
         pointB:b,
         stifness:0.03,
         length:10
     }  
      this.Connection=Constraint.create(Features) 
      World.add(myWorld,this.Connection)
      
        }
    display()
    {
     
        if(this.Connection.bodyA != null)
        {
        stroke ("black")
        strokeWeight(5)
        var a = this.Connection.bodyA.position; 
        var b = this.Connection.pointB; 
        line (a.x,a.y,b.x,b.y)
        }
    }

 connectionBroken () {

this.Connection.bodyA = null

}
}