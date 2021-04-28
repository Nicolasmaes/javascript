const test1 = document.getElementById('p1');
const test2 = document.getElementById('p2');
const test3 = document.getElementById('p3');
const test4 = document.getElementById('p4');
const test5 = document.getElementById('p5');
const test6 = document.getElementById('p6');
const test7 = document.getElementById('p7');
const test8 = document.getElementById('p8');

/* function Book(t, a, p, r){
    this.title = t;
    this.author = a;
    this.pages = p;
    this.rate = r;
} */

class Book{
    constructor(t, a, p, r){
    this.title = t;
    this.author = a;
    this.pages = p;
    this.rate = r; 
    }
}

let firstBook = new Book('Vous allez souffrir','Boris Debot',250, 18.50);
let secondBook = new Book ('Ma passion pour Git','Etienne Zastko',330, 15.20);
let thirdBook = new secondBook.constructor('Le Petit Prince', 'Antoine de Saint-Exupéry', 93, 7.70);
let fourthBook = new Book ('','',93,'');

Book.prototype.release = 'January \'21';
Book.prototype.publishingHouse = 'Les fous du clavier';

class magazine extends Book{
    constructor(n, u){
        super(n, u);
        this.name = n;
        this.cover = u;
    }
}

let firstMag = new magazine('GQ','Brad Pitt');

test1.innerHTML = firstBook.release;
test2.innerHTML = firstBook.publishingHouse;
test3.innerHTML = secondBook.release;
test4.innerHTML = firstBook.constructor;
test5.innerHTML = fourthBook.pages;
test6.innerHTML = thirdBook.pages;
test7.innerHTML = thirdBook.release;
test8.innerHTML = firstMag.cover+' and '+firstMag.publishingHouse;

/* console.log(Object.getPrototypeOf(firstBook)); */
