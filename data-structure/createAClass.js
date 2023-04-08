class Student {
  constructor(fname, lname, year) {
    this.fname = fname;
    this.lname = lname;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }

  getFullName() {
    `${this.fname} ${this.lname}`;
  }

  markLate() {
    this.tardies++;
    return `${this.getFullName()} has been late ${this.tardies} times`;
  }

  addScore(score) {
    this.scores.push(score);
  }

  calculateAverage() {
    let sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }

  static EnrollStudents(arrOfStudents) {
    arrOfStudents.forEach((student) => (student.enrolled = true));
  }
}

const mohammed = new Student("Mohammed", "Ahmed", 1990);
const kamel = new Student("Kamel", "Basha", 1220);
const Radi = new Student("Radi", "Saber", 250);
mohammed.addScore(10);
mohammed.addScore(5);
mohammed.addScore(13);
console.log("average", mohammed.calculateAverage());
Student.EnrollStudents([mohammed, Radi, kamel]);
console.log(mohammed);
console.log(kamel);
console.log(Radi);
