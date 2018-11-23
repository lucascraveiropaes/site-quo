$(document).ready(function(){
	$(".sidenav").sidenav();
	$('.tooltipped').tooltip();
	$("nav ul li a").addClass("waves-effect waves-light");

	setTimeout(function() {
		$('.scrollspy').scrollSpy({
			scrollOffset: 0,
			throttle: 90
		});
	}, 1000);
});