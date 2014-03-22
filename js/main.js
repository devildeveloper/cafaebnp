var counterNav =0;
$(document).on("ready",init);
function init(){
	$("#btn").on('click',function(){
		$("body > header > nav").slideToggle();
	});
	$('.fancybox').fancybox();
}
