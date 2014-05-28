/* 
 * This code is use for JavaScript Namespace 
 */
var person = {
    firstName: 'Kasiti',
    lastName: 'Panthanom',
    gender: 'Male',
    getName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log('Hello, ' + person.getName());
console.log('Hello, ' + person.firstName);

       
    



