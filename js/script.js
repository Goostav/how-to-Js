var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(13, 8);
var triangle3Area = getTriangleArea(5, 13);


function getTriangleArea(a, h) {    
    
    if  ((a <= 0) || (h <= 0)) {
        document.write('Nieprawidłowe dane');
    } else {
        return (a*h/2);
    } 
}

console.log(getTriangleArea(10, 6))