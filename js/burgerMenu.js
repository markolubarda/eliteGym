$(document).ready(function () {
	$('#burgerMenu').on('click', function () {
		$('#burgerMenu').toggleClass('change');
		$('#smallMenu').toggleClass('hide');
	});
});