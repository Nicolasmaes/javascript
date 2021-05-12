window.onscroll = function() { scrollIndicator() } ;
function scrollIndicator() {
// Votre code ici
const html = document.documentElement;
const htmlHeight = html.scrollHeight;
const innerHeight = html.clientHeight;
let hasScrolled = html.scrollTop;
let ope = htmlHeight - innerHeight;
let scrollRate = (hasScrolled / ope) * 100;
document.getElementById('bar').style.width = scrollRate + "%";
}