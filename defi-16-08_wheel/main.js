const loading = document.getElementById("loadingAnimation") ;
const content = document.getElementById("displayContent") ;

window.onload = // écrivez du code ici 
setTimeout(showContent, 3000);

function showContent() {
  // et là
content.style.display = 'block';
loading.style.display = 'none';
}
