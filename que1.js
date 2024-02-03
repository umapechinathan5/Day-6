class movie{
  constructor(title,studio,rating){
  this.title = title;                    // Question A
  this.studio = studio;
  this.rating = rating ? rating : 'PG'   // Question B
  }
  getPG(){
    return "The rating is" + this.rating;
  }

}


var casinoRoyale = new movie ('casino royale','Eon productions','PG13'); // Question C
console.log(casinoRoyale);
console.log(casinoRoyale.getPG());


