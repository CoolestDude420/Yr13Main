/* the sidenav goes on to the screen with width 250*/
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("page-container").style.marginRight = "200px";
	document.getElementById("page-container").style.marginLeft = "-200px";
}
/*the sidenav goes off screen by using margin of zero*/
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("page-container").style.marginRight = "0";
	document.getElementById("page-container").style.marginLeft = "0";
}
$(window).scroll(function() {
	var scrollval = $(this).scrollTop(); // this returns your scroll value/ position
	$("#m-logo").css("transform", "translate(0px,-" + scrollval / 2 + "%)");
	$("#m-btn").css("transform", "translate(-50%," + scrollval / 3 + "%)");
});
$(document).ready(function() {
	$(window).scroll(function() {
		var height = $(".main-background").height();
		var scrollTop = $(window).scrollTop();
		if (scrollTop >= height - ((height / 3 / .95))) {
			$(".main-nav-container").addClass("solid-nav");
		} else {
			$(".main-nav-container").removeClass("solid-nav");
		}
	});
});


$(window).scroll(function() {
	var scrollval = $(this).scrollTop(); // this returns your scroll value/ position
	$("#m-logo").css("transform", "translate(0px,-" + scrollval / 2 + "%)");
	$("#m-btn").css("transform", "translate(-50%," + scrollval / 3 + "%)");
});





function NewsletterAlert() {
	alert("Thank You for subscribing to our Newsletter")
}


