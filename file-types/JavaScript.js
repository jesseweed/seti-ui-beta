// SAMPLE JAVASCRIPT FILE

class Bread {

  constructor(slices) {
    this.slices = 12;

    if ( slices > this.slices ) {
      return 'not enough bread';
    } else {
      return slices;
    }

  }

}

class Sandwich extends Bread {

  constructor(slices) {
    this.bread = super(slices);
    this.toppings = [];
  }

  toppings( ingredients ) {
    ingredients.forEach(function(value, index) {
      this.toppings.push( value );
    });
  }

}

var Club = new Sandwich(3).toppings(['roast beef', 'turkey']);
