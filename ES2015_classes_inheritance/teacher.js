const Person = require('./person_classes')

class Teacher extends Person{
  constructor(first, last, age, gender, interests, subject, grade){
    super(first, last, age, gender, interests);

    this._subject = subject;
    this.grade = grade;
  };

  get subject(){
    return this._subject;

  };

  set subject(newSubject){
    return this._subject = newSubject;

  };
};



  let teacher1 = new Teacher('Wayne', 'Someone', 35, 'male', ['games'], 'Math', 1);

  teacher1.greeting(); //Hi! I'm Wayne
  teacher1.farwell(); //Wauyne has left the building. Bye for now.

  // Change values

  teacher1.subject = 'Balloon animals'; // Sets _subject to "Balloon animals"

  // check it again and see if it matches the new value

  console.log(teacher1.subject); // returns "balloon animals"
