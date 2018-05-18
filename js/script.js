$(function() {
   
    var span = $('span');
    var paragraphs = $('p');
    var ignored = ['newColor1', 'newColor3'];

    span.each(function(index, element) {
        
    var noPain = ignored.indexOf(element.id);
        
        if ((index % 2 == 0) && (noPain == -1)) {
                
            $(element).css('color', 'red');
        };
    });
    
    paragraphs.each(function(index, element) {
        var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
        $(element).append(button);
    });

    $('button').click(function() {
        alert($(this).attr('data-tmp'));
    });  
});