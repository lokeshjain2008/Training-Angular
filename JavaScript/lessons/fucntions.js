console.clear();

function greet(user) {

  return "Hello " + user + "!";

}



function getFullName(fName, lName) {

  return "Your full name is " + fName + " " + lName + ". ";

}


function greetUser(fName, lName) {

  return getFullName(fName, lName) + greet(fName + lName);
}



console.log(greetUser("Java", "Hub"));


console.log(greetUser("Java"));

console.log(greetUser());


////////////

// https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/


var pokemon = {
  firstname: 'Pika',
  lastname: 'Chu ',
  getPokeName: function () {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
};

var pokemonName = function () {
  console.log(this.getPokeName() + 'I choose you!');
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon(); // 'Pika Chu I choose you!'


////////// Call & Apply 


var pokemon = {
  firstname: 'Pika',
  lastname: 'Chu ',
  getPokeName: function () {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
};

var pokemonName = function (snack, hobby) {
  console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call(pokemon, 'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon, ['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms




///////////// closure


function greet() {
  name = 'Java Hub';
  return function () {
    console.log('Hi ' + name);
  }
}

greet();



///////// Hoisting //////


var x = 100;

function hoist() {
  // A condition that should not affect the outcome of the code
  if (false) {
    var x = 200;
  }
  console.log(x);
}

hoist();