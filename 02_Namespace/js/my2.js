/* 
 * This code is use for JavaScript Namespace 
 */
var myApp = {};
 
myApp.id = 0;
 
myApp.next = function() {
    return this.id++; 
};
 
myApp.reset = function() {
    this.id = 0;  
};
 
console.log(myApp.next());
console.log(myApp.next());
var getNextId = myApp.next;
getNextId(); //this not reset id
console.log(myApp.next());

       
    



