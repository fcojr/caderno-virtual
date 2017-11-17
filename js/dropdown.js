$(document).ready(function(){
	$(".dropdown").on("click", function(){
		$(".sub-menu").slideToggle(500);
		$(".dropdown").toggleClass("active closed");
	})
})