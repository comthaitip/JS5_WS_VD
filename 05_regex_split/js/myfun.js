/* 
 * Author & Facebook: Kasiti Panthanom
 * E-Mail: kasiti@cityhubs.net, comthaitip@gmail.com
 */
var result = document.getElementById("frmMessage");



function prepareEvent() {
    var text = "kasiti@cityhubs.net;nutchanart@pure-safety.com,info@cityhubs.net john@mail.com";    
    var changePatt = new RegExp("[;,\\s]", "g");
    document.getElementById("oriText").innerHTML = text;
    result.innerHTML = "";
    
    document.getElementById("changeBtn").onclick = function() {
        var outputStr = text.split(changePatt);
        for (i=0;i < outputStr.length;i++) {
            result.innerHTML += "<br>" + outputStr[i];
        }
        
    };
    
   
}



window.onload = function() {
    prepareEvent();
};



