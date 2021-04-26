createArticle = (id, name) => {
    return '<span>' + name + ' (au kg) : </span> <button id="less'+id+'">-</button><button id="more'+id+'">+</button> <span id="counter' + id + '">0 </span> ';

}

const articles = [
    { price: 10, counter: 0, htmlId: 'Apple', name: 'Pommes', spanCounter: null },
    { price: 1, counter: 0, htmlId: 'Bannana', name:'Bananes', spanCounter: null },
    { price: .1, counter: 0, htmlId: 'Cherries', name: 'Cerises', spanCounter: null },
    { price: .01, counter: 0, htmlId: 'Kiwis', name: 'Kiwis', spanCounter: null }
]


articles.forEach((article) => {

    const item = document.createElement('p');
    item.innerHTML = createArticle(article.htmlId,article.name);
    document.getElementById('list').appendChild(item);
    article.spanCounter = document.getElementById('counter'+article.htmlId);
    const moreButton = document.getElementById('more'+article.htmlId);
    const lessButton = document.getElementById('less'+article.htmlId);
    moreButton.addEventListener('click', function(){ more(article) });
    lessButton.addEventListener('click', function(){less(article)});
})

total = () => {
    let total = 0;
    articles.forEach(function(article){
        total = total + article.price * article.counter;
    })
    document.getElementById('total').innerHTML = total + ' € ';
} 
more = (article) => {
    article.counter++;
    if(article.counter==1){
        article.spanCounter.innerHTML=article.counter+' article';
    }
    else{
        article.spanCounter.innerHTML=article.counter+' articles';  
    }
    total();
}

less = (article) => {
    article.counter--;
    if(article.counter<=0){
        article.counter=0 ;
        article.spanCounter.innerHTML=article.counter+' article';
    }
    else if(article.counter==1){
        article.spanCounter.innerHTML=article.counter+' article';
    }
    else{
        article.spanCounter.innerHTML=article.counter+' articles';
    }
    total();
}