var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var textFirstword = text.split(' ');

var newFirstword = 'triceratops';

var upperNewfirstWord = newFirstword.toUpperCase();

function halfOfeveryText() {
    
    var newText = text.replace(textFirstword[0], upperNewfirstWord);
    return newText.substr(0, newText.length/2);
}

console.log(halfOfeveryText());