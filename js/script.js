
var a = 0;
var b = 0;
var value = (a * a) - (2 * a * b) - (b * b);

console.log(value);

if (value == 0) {
    document.write('wynik jest równy zero');
} else {
    (value > 0) ? document.write('wynik dodatni') : document.write('wynik ujemny');
}


