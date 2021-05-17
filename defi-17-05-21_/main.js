window.onscroll = slideDown;

function slideDown() {
const html = document.documentElement;
let hasScrolled = html.scrollTop;
if (hasScrolled>=100) {
    document.getElementById("navbar").style.top = "0";
}else{
    document.getElementById("navbar").style.top = "";
  }
}