$('document').ready(function() {
	$(".phone-number .tab_item").not(":first").hide();
	$(".phone-number .wrapper .tab").click(function() {
		$(".phone-number .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".phone-number .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".discounts .tab_item").not(":first").hide();
	$(".discounts .wrapper .tab").click(function() {
		$(".discounts .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".discounts .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	 $(".carusel").owlCarousel({
	 	items : 1,
	 	navigation : true,
	 	navigationText : false
	 });

});

