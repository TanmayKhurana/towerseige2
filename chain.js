class chain {
    constructor(bodyA, pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:40
        }
        this.body = Constraint.create(option)
        this.pointB = pointB
        World.add(world,this.body)
    }
    display(){
        if (this.body.bodyA){
        var pointA = this.body.bodyA.position
        var pointB = this.pointB
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        }
    }
    fly(){
        this.body.bodyA = null
    }
}