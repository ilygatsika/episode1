function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
  
var str_array = [
    'Bienvenue sur ton ordinateur personnel.<br>root@astro:~# <br>',
    'Nom>>',
    'Prénom><blink>_</blink>'
];

function typeWriter(ii,loc,str){
    for(let i=0; i<str.length; i++){
        setTimeout(function() {
            document.getElementById(loc).innerHTML = str.substr(0,i);
        },500+(i+ii)*80);
    }
}

function completeSentence(name,nbPhrases){
    var ii = 0;
    for(let k=0; k<nbPhrases; k++){
        var loc = name+k.toString();
        typeWriter(ii,loc,str_array[k]);
        ii += str_array[k].length;
    }
    document.getElementById(name).onclick = function () {
        this.disabled = true;
    }
}

submitForms = function(){
    document.getElementById("form1").submit();
    document.getElementById("form2").submit();
    document.getElementById("form3").submit();
    document.getElementById("form4").submit();

}

$("#submit-form").keypress(
    function(event){
      if (event.which == '13') {
        event.preventDefault();
      }
});

function empty(errorId,okId) {
    var input = $(":text").val();
    var x = document.getElementById(errorId);
    if (input == "") {
        x.style.display = "block"; 
        return false;
    }
    else {
        x.style.display = "none";
        var y = document.getElementById(okId);
        y.style.display = "block"; 
        return true;
    }
}

$(document).ready(function() {
    //Slide up and down on click
    $("a.box-toggle").click(function(){
        $(this).toggleClass('inactive');
        $(this).parent().next("div.box-content").slideToggle("slow");
    });
});

function translation(objectId) {
    var x = document.getElementById(objectId);
    if (x.style.visibility === 'hidden') {
      x.style.visibility = 'visible';
    } else {
      x.style.visibility = 'hidden';
    }
}

function showElement(elementId, ignoreId=false) { 
    var x = document.getElementsByName(elementId);
    for (let item of x) {
        if (item.id !== ignoreId) {
            item.style.visibility = 'visible'; 
        }
    }
} 

function hideElement(elementId,ignoreId=false) { 
    var x = document.getElementsByName(elementId);
    for (let item of x) {
        if (item.id !== ignoreId) {
            item.style.visibility = 'hidden'; 
        }
    }
} 
