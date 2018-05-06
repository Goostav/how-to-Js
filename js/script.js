var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

allNames.splice(2, 0, 'Lucjan', 'Jadźwiga', 'Olek');

allNames.push('Lucjan');

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
}

console.log(allNames);

















