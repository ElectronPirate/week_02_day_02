class Person{
  constructor(first, last, age, gender, interests){
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting(){
    console.log(`Hi! I'm ${this.name.first}`);
  };

  farwell(){
    console.log(`${this.name.first} has left the building. Bye for now!`);
  };
}


// let han = new Person('Han', 'Solo', 30, 'male', ['smuggling']);
// han.greeting();
//
// //Hi I'm Han.
//
// let leila = new Person('Leila', 29, 'female', ['government']);
//
// leila.farwell();

// Leila has left the building. Bye for now.

// -------------------------------------------------------------------------------

// Person is our superclqss

module.exports = Person;
