$(function() {
        console.log('DOM loaded - you can have fun');
});

//Variables

var span = $('span');
var paragraphs = $('p');

//Functions

span.each(function(index, element) {
    $('span:even').css('color', 'red');
});

paragraphs.each(function(index, element) {
    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
    $(element).append(button);
});

$('button').click(function() {
	alert($(this).attr('data-tmp'));
});

