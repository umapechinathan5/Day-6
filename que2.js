class circle{
  constructor(radius,color){
    this.radius=radius;
    this.color=color;
  }
  area(){
    let area = Math.PI*this.radius*this.radius;
    return area;
  }
  cirucumference(){
    let cirucumference = Math.PI*this.radius*2;
    return cirucumference;
  }


}
var uma = new circle(5,'blue');
console.log(uma.area());
console.log(uma.cirucumference());