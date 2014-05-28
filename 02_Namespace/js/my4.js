/* 
 * This code is use for JavaScript Namespace 
 */
var person = (function() {
    var firstName = 'Kasiti';
    var lastName = 'Panthanom';
    var gender = 'Male';
    return {
        getName: function() {
            return firstName + ' ' + lastName + ' (' + gender + ')';
        }
    }
})();

console.log('Hello, ' + person.getName());
console.log('Hello, ' + person.firstName); //error






