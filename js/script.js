$(function(){
	
    var carouselList = $('#carousel ul');
    var leftControl = document.getElementById('js-leftControl');
    var rightControl = document.getElementById('js-rightControl');
    
    var interval = setInterval(moveFirstSlide, 3000);

    function moveFirstSlide() {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
        carouselList.animate({'marginLeft':-800}, 500);
    };
    
    function moveLastSlide() {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        firstItem.before(lastItem);
        carouselList.css({marginLeft:-800});
    };
   
    function nextSlide() {
        clearInterval(interval);
        carouselList.animate({'marginLeft':-800}, 500, moveFirstSlide);
    };
    
    function previousSlide() {
        clearInterval(interval);
        
        moveLastSlide();
        carouselList.animate({'marginLeft':0}, 500 );
    }
    
    rightControl.addEventListener('click', nextSlide);
    leftControl.addEventListener('click', previousSlide);
});    