// gallery slider
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = $('.mySlides');
	var dots = $('.demo');
	// var captionText = $('#caption');

	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}
	slides[slideIndex-1].style.display = 'block';
	dots[slideIndex-1].className += ' active';
	// captionText.innerHTML = dots[slideIndex-1].alt;
}

// change arrow color to white
$( document ).ready(function() {
	function colorChange() {
		$('.arrow').css('color', '#ffffff');
	}
	colorChange();
});


function flipImg() {
	$('#kraft').addClass('animated flip');
}
function flipImg2() {
	$('#cardio').addClass('animated flip');
}
function flipImg3() {
	$('#bar').addClass('animated flip');
}
function flipReset() {
	$('.thumbnailImg').removeClass('animated flip');
}