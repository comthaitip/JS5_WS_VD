/* 
 * Author & Facebook: Kasiti Panthanom
 * E-Mail: kasiti@cityhubs.net, comthaitip@gmail.com
 */


function checkFrm() {
    var postalPatt = /^\d{5}$/;
    var eMailPatt = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var phonePatt = new RegExp("(^[0-9]{10}$|^[0-9]{3}-[0-9]{7}$)", "g"); //Thailand number
    
    document.getElementById("myForm").onsubmit = function () {
        if (!postalPatt.test(document.getElementById("inputPostal").value)) {
           alert("You type wrong Postal Code");
           return false;
        } 
        
        if (!eMailPatt.test(document.getElementById("inputEmail").value)) {
           alert("You type wrong E-Mail");
           return false;
        } 
        
        if (!phonePatt.test(document.getElementById("inputPhone").value)) {
           alert("You type wrong Phone Number");
           return false;
        } 
        
    };
}



window.onload = function() {
   checkFrm(); 
};



