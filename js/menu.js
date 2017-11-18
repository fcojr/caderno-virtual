$(document).ready(function(){
	$(".nav-back").hide();
	$('.fa-bars').on("click", function(){
		$('#nav').toggleClass("menu-ativo");
		if($('#nav').hasClass("menu-ativo")){
			$(".nav-back").show();
			$("#layout").addClass("overflow");
		}
		$(".nav-back").on("click", function(){
			$('#nav').removeClass("menu-ativo");
			$(this).hide();
			$("#layout").removeClass("overflow");
		})
	})
});
$(function(){
	$(".icon").on("click", function(){
		$(this).toggleClass("ativo");
	});
});