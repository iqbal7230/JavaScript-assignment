function calculate(){
   var amt = prompt("Enter principal amount")
   var rate = prompt("Enter rate of interest")
   var time = prompt("Enter period in year")
    var si = (amt*rate*time)/100;
    alert("Simple Interest "+ "Rs "+si)
}
function checkPalindrome(){
   var input = prompt("Enter your input")
    alert(input == input.split('').reverse().join(''))
}

function areaCircle(){
    var  r = prompt("Enter radius of the circle")
    var area = Math.PI*Math.pow(r,2);
    alert("Area of the circel is " + area)
}

// copy information form one object to another 
// 1. Shallow copy of Object
var studentDetail ={
    name:'Iqbal',
    college: 'IILM',
    course:'B.tech',
}
var detail2 ={...studentDetail}
console.log(detail2)
// shallow copy can also be create using assign 
var obj = Object.assign({}, studentDetail);
console.log(obj);

// 2. Deep copy 
var datail3 = JSON.parse(JSON.stringify(studentDetail));
console.log(studentDetail);

// Employee Array of Object
var employees = [
    {
        employeeId: 101,
        name: "Iqbal Ansari",
        age: 22,
        salary: 15000,
        dob:"27 july 2004"
    },
    {
        employeeId: 102,
        name: "Rahul Sharma",
        age: 19,
        salary: 8000,
        dob:"15 march 2005"
    },
    {
        employeeId: 103,
        name: "Anjali Verma",
        age: 25,
        salary: 400,
        dob:"10 october 1998"
    },
    {
        employeeId: 104,
        name: "Sunita Singh",
        age: 30,
        salary: 12000,
        dob:"5 may 1993"
    }
]
// filter all employees with salary greater than 5000
var salary = employees.filter((e)=> e.salary >5000);
console.log(salary);

// group employee on the basis of their age
function groupAge(array, emp){
    var age = emp.age;
    if(!array[age]){
        array[age] = [];
    }
    array[age].push(emp);
    return array;
}   
var group = employees.reduce(groupAge, {}); 
console.log(group);

// salary <1000 and age >20 then increment 5 times their salary
var incSalary = employees.filter((e)=> e.salary <1000 && e.age >20)
.map((e)=>{
    e.salary = e.salary *5;
    return e;
});
console.log(incSalary);

