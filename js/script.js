var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var dinosaur = 'triceratops';

var newText = text.replace('Velociraptor', (dinosaur.toUpperCase()));

console.log(newText.length/2);

var brandNewtext = newText.slice(0,72);

console.log(brandNewtext);







