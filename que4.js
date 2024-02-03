class uber {
  constructor(distance){ 
    this.distance=distance;

  }
  price(){
    let price = 18 * this.distance;
    return price;
  }
}
var uma = new uber(15);
console.log(uma.price());
