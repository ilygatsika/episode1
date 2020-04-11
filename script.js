var str_array = [
    'Bienvenue sur ton ordinateur personnel.<br><br>Vérification<br>',
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

function completeSentence(nbPhrases){
    var ii = 0;
    for(let k=0; k<nbPhrases; k++){
        var loc = 'phrase'+k.toString();
        typeWriter(ii,loc,str_array[k]);
        ii += str_array[k].length;
    }
    document.getElementById('button1').onclick = function () {
        this.disabled = true;
    }
}
