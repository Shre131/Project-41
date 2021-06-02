class DROPS{
   constructor(x,y){

      var options={
         isStatic:false,
         restitution:1,
         friction:0.001,
      }
      this.r=5;
      this.body=Bodies.circle(x,y,this.r,options);
    World.add(world,this.body);
   }


   update(){
      if(this.body.position.y>605){
         Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,605)});
      }
   }

   display(){
      var pos =this.body.position;
          push();
          ellipseMode(RADIUS);
          fill("cyan");
          ellipse(pos.x, pos.y,this.r,this.r);
          pop();
  }
    
}