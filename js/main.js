// initialisation variables

var niveauSucre=0;
let compteur=0;

// selection du café

var choixCafe=new Array(
        'CAFE LONG',
        'ESPRESSO',
        'CAPPUCCINO',
        'NOISETTE',
);

function cafeChoix( choix) {
reset();   
    document.getElementById('choixBoisson').innerHTML=choixCafe[choix];
    document.getElementById('selectionCafe_'+choix).style.background='red';
    document.getElementById('selectionCafeButton_'+choix).style.background='red';
}

// selection du sucre

var choixSucre=new Array(
        'NIVEAU SUCRE 0',
        'NIVEAU SUCRE 1',
        'NIVEAU SUCRE 2',
        'NIVEAU SUCRE 3',
        'NIVEAU SUCRE 4',
        'NIVEAU MAX',
);


function augmenterSucre(){
       if (niveauSucre <= 4){
        niveauSucre++;
        document.getElementById('niveauSucre_'+niveauSucre).style.background='red';
        document.getElementById('choixBoisson').innerHTML=choixSucre[niveauSucre];
    } 
};

function diminuerSucre(){
    if (niveauSucre >0){
        niveauSucre--;
        document.getElementById('niveauSucre_'+(niveauSucre+1)).style.background='#a7a7a7';
        document.getElementById('choixBoisson').innerHTML=choixSucre[niveauSucre];
    } 
};  

// les alertes en delai

function delayedAlert() {
     window.setTimeout(displaySelectNiveauSucre, 1000);
 
 }

 function displaySelectNiveauSucre() {
     document.getElementById('choixBoisson').innerHTML="NIVEAU DE SUCRE :"
 }


function delayedAlertSucre() {
     document.getElementById('choixBoisson').innerHTML="EN PRÉPARATION"
     document.getElementById('recupTasse').style.display='block';
     var audio = new Audio('sons/cafe3.mp3');audio.play();
     window.setTimeout(displayConfirmation, 3500);   
 }

 function displayConfirmation() {
     document.getElementById('choixBoisson').innerHTML="BOISSON PRÊTE"
     document.getElementById('recupTasse').style.display='none';
     document.getElementById('recupTasse2').style.display='block';
 }

// les resets
    
function reset(){
    document.getElementById('selectionCafe_0').style.background='black';
    document.getElementById('selectionCafe_1').style.background='black';
    document.getElementById('selectionCafe_2').style.background='black';
    document.getElementById('selectionCafe_3').style.background='black';
    document.getElementById('selectionCafeButton_0').style.background='#a7a7a7';
    document.getElementById('selectionCafeButton_1').style.background='#a7a7a7';
    document.getElementById('selectionCafeButton_2').style.background='#a7a7a7';
    document.getElementById('selectionCafeButton_3').style.background='#a7a7a7';
}


// DIVERS A CHECK





