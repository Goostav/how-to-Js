function drawTree(l) {
    
    for (var i = 0; i < l; i++) {
        var star = '';
        for (var j = 0; j < i; j++) {
            star += '*';
        }
        console.log(star);  
    } 
    return 'treeEnd';
}
console.log(drawTree(9));

