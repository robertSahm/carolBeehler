


$(function() { 
// Load home page image on document load 
	$('#main').load('home.html');

	//fades out visible divs in #main
	$('.about').click(function() {
		$('#main').load('about.html').hide().fadeIn(500);
	
		//$('#main:visible').fadeOut(400, function() {
			// end animation
		//});
	});
	$('.portfolio').click(function() {
		$('#main').load('portfolio.html').hide().fadeIn(500);
		$('.portfolioDropdown').slideToggle(600, function(){
			// end animation
		});
	});
	$('.books').click(function() {
		$('#main').load('books.html').hide().fadeIn(500);
	});
	$('.brochures').click(function() {
		$('#main').load('brochures.html').hide().fadeIn(500);
	});
	$('.ephemera').click(function() {
		$('#main').load('ephemera.html').hide().fadeIn(500);
	});
	$('.clientList').click(function() {
		$('#main').load('clientList.html').hide().fadeIn(500);
	});
});



































/*
//
// Gentlemen, start your engines...
//
var main = $('#main')
	// Navigation click variables
	var about = $('#about a');
	var portfolio = $('#portfolio a');
	var clientList = $('#clientList a');
	var portfolioDropdown = $('.portfolioDropdown');

//
// 3...2...1... G O ! ! !
//

$(function() { 
// Load home page image on document load 
	$(main).load('home.html');
	//$('div#homeImageWrapper').addClass("current");
	// create clickable elements
		// about click functions
		$(about).click(function() {
			$('#about h3').css('font-weight', '800')
			$('div#homeImageWrapper').fadeOut( 500 , function() {
				// fadeOut Complete
				$(main).load('about.html').hide().fadeIn(500);
				// hide => fadeIn complete


			});		
		});

	// Portfolio click functions
	$(portfolio).click(function() {
		$(portfolioDropdown).slideToggle(600);
		//$(main).load('portfolio.html').hide().fadeIn(500);
	});

/*	$(clientList).click(function() {
		
	});





});  

*/





