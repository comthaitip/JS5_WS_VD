/* 
 * This code is use for JavaScript AJAX Training 
 */
var xmlhttp;
function loadXMLDoc(url, cfunction) {
    
    if (window.XMLHttpRequest) { //IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else { // code for IE6, IE5
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    
    xmlhttp.onreadystatechange = cfunction;
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
}

function loadTxt() {
    loadXMLDoc('data/sample.txt', function() {
       
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200)
        {
            document.getElementById('result').innerHTML = xmlhttp.responseText;
        }

    });
}

function loadCatalog() {
    loadXMLDoc('data/mycatalog.xml' , function() {
     if (xmlhttp.readyState === 4 && xmlhttp.status === 200)
        {
            var xmlDoc = xmlhttp.responseXML;
            var output = '';
            var x = xmlDoc.getElementsByTagName('ARTIST');
            for (i = 0; i < x.length; i++)
            {
               output += x[i].childNodes[0].nodeValue + '<br>';
            }
            document.getElementById('result').innerHTML = output;
        }
    });
    
}
 
       
    



