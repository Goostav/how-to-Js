$(function() {
   
    var span = $('span');
    var paragraphs = $('p');
    var ignored = [];

    span.each(function(index, element) {
        
    (index % 2 != 0) ? ignored.push(element.id) : $(element).css('color', 'red')
    });

    paragraphs.each(function(index, element) {
        var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
        $(element).append(button);
    });

    $('button').click(function() {
        alert($(this).attr('data-tmp'));
    });  
    
    console.log(ignored);
});


