/* 
 * This code is use for JavaScript Objects
 */
function Person(firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
}

Person.prototype.getName = function() {
    return this.firstName + ' ' + this.lastName;     
};

var myPerson = new Person('Kasiti', 'Panthanom', 'Male', 30);
var displayName = myPerson.getName;

console.log(myPerson.getName());
console.log(displayName());
console.log(displayName === myPerson.getName);
console.log(displayName === Person.prototype.getName);

       
    



