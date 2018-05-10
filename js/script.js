var add = document.querySelector('#addElem');

var list = document.querySelector('#list');

add.addEventListener('click', function(num){
    var element = document.createElement('li');
    var num = list.getElementsByTagName('li').length;
    element.innerHTML = 'item'+ ' ' + num;
    list.appendChild(element);
});