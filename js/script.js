$(function(){
	
    var carouselList = $('#carousel ul');
    var leftControl = document.getElementById('js-leftControl');
    var rightControl = document.getElementById('js-rightControl');
    
    function changeSlide() {
        carouselList.animate({'marginLeft':-800}, 500, moveFirstSlide);
    };

    var interval = setInterval(changeSlide, 3000);

    function moveFirstSlide () {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    };
    
    function moveLastSlide() {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        firstItem.before(lastItem);
        carouselList.css({marginLeft:0});
    };
   
    function nextSlide() {
        clearInterval(interval);
        carouselList.animate({'marginLeft': -800}, 500, moveFirstSlide);
    };
    
    function previousSlide() {
        clearInterval(interval);
        carouselList.animate({'marginRight': 800}, 500, moveLastSlide);	
    };
    
    rightControl.addEventListener('click', nextSlide);
    leftControl.addEventListener('click', previousSlide);
});    