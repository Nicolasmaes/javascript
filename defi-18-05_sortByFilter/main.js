/* let all = document.getElementById('allBtn');
let summer = document.getElementById('summerBtn');
let autumn = document.getElementById('autumnBtn');
let winter = document.getElementById('winterBtn');
let spring = document.getElementById('springBtn');

let summerPictures = document.getElementsByClassName('summer');
let autumnPictures = document.getElementsByClassName('autumn');
let winterPictures = document.getElementsByClassName('winter');
let springPictures = document.querySelectorAll('spring');

summer.addEventListener('click', function tri(){
    console.log('clic marche');
    springPictures.classList.add('hide');
    winterPictures.classList.add('hide');
    autumnPictures.classList.add('hide');
});
 */

let all = document.getElementById('allBtn')
let summer = document.getElementById('summerBtn')
let autumn = document.getElementById('autumnBtn')
let winter = document.getElementById('winterBtn')
let spring = document.getElementById('springBtn')


all.addEventListener('click',function () {
    console.log('bouton all OK');
})

summer.addEventListener('click',function () {
    console.log('bouton sum OK');
let summerClass = document.getElementsByClassName('summer');
let winterClass = document.getElementsByClassName('winter');
let springClass = document.getElementsByClassName('spring');
let autumnClass = document.getElementsByClassName('autumn');

for(let i = 0; 1< summerClass.length; i++){
    console.log(summerClass[i]);
    summerClass[i].classList.add('show');
    winterClass[i].classList.add('hide');
    springClass[i].classList.add('hide');
    autumnClass[i].classList.add('hide');
}
});

autumn.addEventListener('click',function () {
    console.log('bouton autumn OK');
})
winter.addEventListener('click',function () {
    console.log('bouton winter OK');
})
spring.addEventListener('click',function () {
    console.log('bouton spring OK');
})
