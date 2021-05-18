let all = document.getElementById('allBtn');
let summerBtn = document.getElementById('summerBtn');
let autumn = document.getElementById('autumnBtn');
let winter = document.getElementById('winterBtn');
let spring = document.getElementById('springBtn');

let summerPictures = document.getElementsByClassName('summer');
let autumnPictures = document.getElementsByClassName('autumn');
let winterPictures = document.getElementsByClassName('winter');
let springPictures = document.querySelectorAll('.spring');

summerBtn.addEventListener('click', function tri(){
    console.log('clic marche');
    springPictures.classList.add('hide');
});
/* document. getElementsByTagName('img') */