const title = document.getElementById('title');
let counterValue=0;

function changeTitle() {
     // Votre code ici
     counterValue++;
     console.log(counterValue);
     switch(counterValue){
         case 0:
        title.innerText = 'Bonjour !';
         break;
         case 1:
        title.innerText = 'Good morning !';
         break;
         case 2:
            title.innerText = 'Guten Tag !';
         break;
         case 3:
            title.innerText = 'Buongiorno !';
         break;
         case 4:
            title.innerText = 'Buenos Dias !';
         break;
         case 5:
            title.innerText = 'Hallå !';
         break;
         case 6:
            title.innerText = 'Bonjour !';
            counterValue=0;
         break;
         default:
            counterValue=0;
         }
}

setInterval(changeTitle, 1000);
