// selection du cafe
var niveauSucre=0;
var timeoutID="BLABLA";
let compteur=0;


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
        'SUCRE 1',
        'SUCRE 2',
        'SUCRE 3',
        'SUCRE 4',
        'SUCRE 5',
);


function sucreChoix( test) {
    if (niveauSucre=niveauSucre++){
        document.getElementById('choixBoisson').innerHTML=choixSucre[test];
    }
}

function augmenterSucre(){
    document.getElementById('niveauSucre_'+niveauSucre).style.background='red';
    niveauSucre=niveauSucre+1;
    if (niveauSucre > 4){
        niveauSucre=4
    } 
};

function diminuerSucre(){
    document.getElementById('niveauSucre_'+niveauSucre).style.background='#a7a7a7';
    niveauSucre=niveauSucre-1;
    if (niveauSucre < 0){
    niveauSucre=0
    } 
};

// selection du café

// function delayedAlert() {
//     timeoutID = window.setTimeout(slowAlert, 1000);
// }

// function slowAlert() {
//     alert("That was really slow!");
// }

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

// confirmation de la selection







// DIVERS A CHECK

    // window.setTimeout(nomDeFunction,3000);



