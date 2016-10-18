// for slider
$('document').ready(function() {
	$(".carusel").owlCarousel({
		 	items : 1,
		 	navigation : true,
		 	navigationText : false
		 });
});

// for burger
$(document).ready(function() {
    $(".burger").on('click', function () {
    	if (!$(this).hasClass('open')) {
            $(this).addClass('open');
            $('.nav-menu').slideDown(300);
        } else {
            $(this).removeClass('open');
            $('.nav-menu').slideUp(300);
        }
    });
});

// $(document).ready(function() {
//     $(".burger").on('click', function () {
//         alert('3333');
//     });
// });