
var a = 137;
var b = 9;
var value = (a * a) - (2 * a * b) - (b * b);

console.log(value);

if (value > 0) {
    document.write('wynik dodatni');
}
else if (value < 0) {
    document.write('wynik ujemny');
}
else {
    document.write('wynik jest równy 0');
}