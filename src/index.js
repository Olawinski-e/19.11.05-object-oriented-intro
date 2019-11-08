import "./styles.css";

let person = {
  firstName: "Chuck",
  lastName: "Norris",
  birthDate: new Date("1940-03-10"),
  jokes: [
    "Chuck Norris counted to infinity... Twice.",
    "Chuck Norris is the only man to ever defeat a brick wall in a game of tennis"
  ],
  displayInfo: function() {
    console.log(
      `My name is ${this.firstName} ${this.lastName} and I have ${
        this.jokes.length
      } jokes!`
    );
  },
  getAge: function() {
    var todayDate = new Date().getFullYear();
    let birthDate = this.birthDate.getFullYear();
    let age = todayDate - birthDate;
    return age.toString();
  },
  addJoke: function(jokes) {
    this.jokes.push(jokes);
  },
  getRandomJoke: function() {
    let randomJoke = Math.floor(Math.random() * this.jokes.length);
    return this.jokes[randomJoke];
  }
};

console.log(person);
person.getAge();

console.log("getAge =", person.getAge()); // Should return 79 if you are in 2019

person.addJoke("Chuck Norris can divide by zero.");
console.log("getRandomJoke =", person.getRandomJoke());
person.addJoke("Chuck Norris kills flies with his gun.");
console.log("getRandomJoke =", person.getRandomJoke());
person.addJoke("Chuck Norris was once in a knife fight, and the knife lost.");
console.log("getRandomJoke =", person.getRandomJoke());

person.displayInfo();

document.getElementById("app").innerHTML = `<h1>Hello you</h1>
<div>$$$</div>`;
