// Q1. Create a hierarchy of person, employee and developers. 

function person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}
function employe(employeId, designation, department){
    this.employeId = employeId;
    this.designation = designation;
    this.department = department;
}
function developer(skillSet, experience){
    this.skillSet = skillSet;
    this.experience = experience;
}
// Inheritence
employe.prototype = new person();
developer.prototype = new employe();

const dev1 = new developer("Mern Stack", "1 Year");
dev1.name = "Iqbal Ansari";
dev1.age = 22;
dev1.gender = 'Male';
dev1.employeId = 8896;
dev1.designation = "Devveloper Trainee";
dev1.department = "JS Competency";

console.log(dev1);

// output
/* 
person {
  skillSet: 'Mern Stack',
  experience: '1 Year',
  name: 'Iqbal Ansari',
  age: 22,
  gender: 'Male',
  employeId: 8896,
  designation: 'Devveloper Trainee',
  department: 'JS Competency'
}
*/
