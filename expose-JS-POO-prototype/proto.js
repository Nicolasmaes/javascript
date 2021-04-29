const test1 = document.getElementById('p1');

let Book = function (title){
    this.title = title;
}
let lesVoitures = new Book('Les Voitures');
Book.prototype.notes = function(){
    prompt(this.title+' : notez ce livre');
}
/* lesVoitures.notes(); */
let lesMotos = new Book ('Les Motos');
let result = lesMotos.notes();

test1.innerHTML = result; //Ne fonctionne pas encore.

console.log(result);
