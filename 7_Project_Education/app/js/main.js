$('document').ready(function() {
	// * phone number at header *
	$(".phone-number .tab_item").not(":first").hide();
	$(".phone-number .wrapper .tab").click(function() {
		$(".phone-number .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".phone-number .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
	
	// * discounts tab *
	$(".discounts .tab_item").not(":first").hide();
	$(".discounts .wrapper .tab").click(function() {
		$(".discounts .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".discounts .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	// * phone number at footer *
	$(".ph-num-quest .tab_item").not(":first").hide();
	$(".ph-num-quest .wrapper .tab").click(function() {
		$(".ph-num-quest .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".ph-num-quest .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
	
	$(".carusel").owlCarousel({
	 	items : 1,
	 	navigation : true,
	 	navigationText : false
	 });

});

