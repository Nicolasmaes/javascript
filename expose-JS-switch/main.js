const counter=document.getElementById('counter');
const buttonPlus=document.getElementById('plus');
const buttonMinus=document.getElementById('minus');
let counterValue=0;


buttonPlus.addEventListener('click',more);
buttonMinus.addEventListener('click',less);

function more(){
    let sex = prompt("entrez le sexe de l'enfant");
    counterValue++;
    console.log(counterValue);
    switch(counterValue){
        case 0:
            counter.innerHTML=0+' enfant';
            document.getElementById('p1').innerHTML ="pas d'enfants";
            document.getElementById('p2').innerHTML = "aucun biberon";
            document.getElementById('p3').innerHTML = "aucune couche";
        break;
        case 1:
            if (sex == 'male') {
            document.getElementById('p1').innerHTML ="C'est un garçon, tout seul."; 
            }
            else {
            document.getElementById('p1').innerHTML ="C'est une fille, seule.";  
            }
            counter.innerHTML=counterValue+' enfant';
            document.getElementById('p2').innerHTML = "Ce sera 7 biberons par jour.";
            document.getElementById('p3').innerHTML = "Et 8 couches !";
        break;
        case 2:
            counter.innerHTML=counterValue+' enfants';
            document.getElementById('p1').innerHTML = 'Ce sont des jumeaux !';
            document.getElementById('p2').innerHTML = "Ce sera 14 biberons par jour.";
            document.getElementById('p3').innerHTML = "Et 16 couches !";
        break;
        case 3:
            counter.innerHTML=counterValue+' enfants';
            document.getElementById('p1').innerHTML = 'Ce sont des triplés !';
            document.getElementById('p2').innerHTML = "Ce sera 21 biberons par jour.";
            document.getElementById('p3').innerHTML = "Et 24 couches !";
        break;
        case 4:
            counter.innerHTML=counterValue+' enfants';
            document.getElementById('p1').innerHTML = 'Ce sont des quadruplés !!';
            document.getElementById('p2').innerHTML = "Ce sera 28 biberons par jour.";
            document.getElementById('p3').innerHTML = "Et 32 couches !";
            document.body.style.background = 'url("back2.jpg") no-repeat';
            document.body.style.backgroundSize = 'cover';
        break;
        case 5:
            counter.innerHTML=counterValue+' enfants';
            document.getElementById('p1').innerHTML = 'Ce sont des quintuplés !!!';
            document.getElementById('p2').innerHTML = "Ce sera 35 biberons par jour.";
            document.getElementById('p3').innerHTML = "Et 40 couches !";
            document.body.style.background = 'url("math.gif") no-repeat';
            document.body.style.backgroundSize = 'cover';
        break;
        default:
            counter.innerHTML="6 ou plus...";
            document.getElementById('p1').innerHTML ="<img src='zach.gif' alt='gif'>";
            document.getElementById('p2').innerHTML = "";
            document.getElementById('p3').innerHTML = "";
            document.body.style.background = 'url("math.gif") no-repeat';
            document.body.style.backgroundSize = 'cover';
        }
        if(counterValue<0){
            counterValue=0;
            counter.innerHTML=0+' enfant';
            document.getElementById('p1').innerHTML ="pas d'enfants";
            document.getElementById('p2').innerHTML = "aucun biberon";
            document.getElementById('p3').innerHTML = "aucune couche";
            document.body.style.background = 'url("back2.jpg") no-repeat';
            document.body.style.backgroundSize = 'cover';
        }
        else if(counterValue>6){
            counterValue=6;
            counter.innerHTML="6 ou plus...";
            document.getElementById('p1').innerHTML ="<img src='zach.gif' alt='gif'>";
            document.getElementById('p2').innerHTML = "";
            document.getElementById('p3').innerHTML = "";
            document.body.style.background = 'url("math.gif") no-repeat';
            document.body.style.backgroundSize = 'cover';
        }
}
function less(){
    counterValue--;
    console.log(counterValue);
    switch(counterValue){
        case 0:
            counter.innerHTML=0+' enfant';
            document.getElementById('p1').innerHTML ="pas d'enfants";
            document.getElementById('p2').innerHTML = "aucun biberon";
            document.getElementById('p3').innerHTML = "aucune couche";
        break;
        case 1:
            counter.innerHTML=counterValue+' enfant';
            document.getElementById('p1').innerHTML = "C'est un enfant unique.";
            document.getElementById('p2').innerHTML = "Ce sera 7 biberons par jour.";
            document.getElementById('p3').innerHTML = "Et 8 couches !";
        break;
        case 2:
            counter.innerHTML=counterValue+' enfants';
            document.getElementById('p1').innerHTML = 'Ce sont des jumeaux !';
            document.getElementById('p2').innerHTML = "Ce sera 14 biberons par jour.";
            document.getElementById('p3').innerHTML = "Et 16 couches !";
        break;
        case 3:
            counter.innerHTML=counterValue+' enfants';
            document.getElementById('p1').innerHTML = 'Ce sont des triplés !';
            document.getElementById('p2').innerHTML = "Ce sera 21 biberons par jour.";
            document.getElementById('p3').innerHTML = "Et 24 couches !";
        break;
        case 4:
            counter.innerHTML=counterValue+' enfants';
            document.getElementById('p1').innerHTML = 'Ce sont des quadruplés !!';
            document.getElementById('p2').innerHTML = "Ce sera 28 biberons par jour.";
            document.getElementById('p3').innerHTML = "Et 32 couches !";
            document.body.style.background = 'url("back2.jpg") no-repeat';
            document.body.style.backgroundSize = 'cover';
        break;
        case 5:
            counter.innerHTML=counterValue+' enfants';
            document.getElementById('p1').innerHTML = 'Ce sont des quintuplés !!!';
            document.getElementById('p2').innerHTML = "Ce sera 35 biberons par jour.";
            document.getElementById('p3').innerHTML = "Et 40 couches !";
            document.body.style.background = 'url("math.gif") no-repeat';
            document.body.style.backgroundSize = 'cover';
        break;
        default:
            counter.innerHTML="6 ou plus...";
            document.getElementById('p1').innerHTML ="<img src='zach.gif' alt='gif'>";
            document.getElementById('p2').innerHTML = "";
            document.getElementById('p3').innerHTML = "";
            document.body.style.background = 'url("math.gif") no-repeat';
            document.body.style.backgroundSize = 'cover';
        }
        if(counterValue<0){
            counterValue=0;
            counter.innerHTML=0+' enfant';
            document.getElementById('p1').innerHTML ="pas d'enfants";
            document.getElementById('p2').innerHTML = "aucun biberon";
            document.getElementById('p3').innerHTML = "aucune couche";
            document.body.style.background = 'url("back2.jpg") no-repeat';
            document.body.style.backgroundSize = 'cover';
        }
        else if(counterValue>6){
            counterValue=6;
            counter.innerHTML="6 ou plus...";
            document.getElementById('p1').innerHTML ="<img src='zach.gif' alt='gif'>";
            document.getElementById('p2').innerHTML = "";
            document.getElementById('p3').innerHTML = "";
            document.body.style.background = 'url("math.gif") no-repeat';
            document.body.style.backgroundSize = 'cover';
        }
}