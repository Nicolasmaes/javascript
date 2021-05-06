// MENU HAMBURGER

const btn = document.getElementById('hamb_menu_btn');
const menu = document.getElementById('classic_menu');
let cross1 = document.getElementById('barre1');
let cross2 = document.getElementById('barre2');
let cross3 = document.getElementById('barre3');
let counter = 'closed';


btn.addEventListener('click',unroll);

function unroll(){
    if (counter == 'closed') {
        menu.style.display = 'block';
        counter = 'open';
        console.log(counter);
        console.log(screen.width);
/*         cross1.classList.toggle("nico"); */
        cross1.style.transform = 'rotate(-45deg)';
        cross1.style.transition = '0.5s';
        cross1.style.position = 'relative';
        cross1.style.top = '18px';
        cross1.style.backgroundColor = '#2c5f8f';
        cross3.style.backgroundColor = '#c53c3c';
        cross2.style.display = 'none';
        cross3.style.transform = 'rotate(45deg)';
        cross3.style.transition = '0.5s';
        cross3.style.position = 'relative';
        cross3.style.bottom = '2px';

        }
        
        else{
        menu.style.display = 'none';
        counter = 'closed';
        console.log(counter);
        console.log(screen.width);

        cross1.style.width = '60px';
        btn.style.backgroundColor = 'none';
        cross1.style.left = '0';
        cross1.style.top = '0';
        cross1.classList.toggle("nico");
        cross1.style.transform = 'rotate(0deg)';
        cross2.style.display = 'block';
        cross3.style.transform = 'rotate(0deg)';
        cross3.style.width = '60px';
        cross3.style.bottom = '0';


    }
}

/* window.addEventListener('resize', function(){

}); */

/* if(screen.width <=800){
    menu.style.display = 'block'; 
} */

