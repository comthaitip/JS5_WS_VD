/* 
 * This code is use for JavaScript Namespace 
 */
var myApp = {};
 
myApp.id = 0;
 
myApp.next = function() {
    return myApp.id++; 
};
 
myApp.reset = function() {
    myApp.id = 0;  
};
 
console.log(myApp.next());
console.log(myApp.next());
myApp.reset();
console.log(myApp.next());

       
    



