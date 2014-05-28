/* 
 * This code is use for JavaScript Namespace 
 */
var person = {
    firstName: 'Kasiti',
    lastName: 'Panthanom',
    gender: 'Male',
    age: 30,
    getName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

person.lastName = 'Smith';
console.log(person.getName());

       
    



