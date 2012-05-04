


$(function() { 
// Load home page image on document load 
	$('#main').load('home.html').hide().fadeIn(700);

	// fades out top-right address on all nav clicks
	$('.navText a').click(function() {
			$('.topAddress').fadeOut(700);
		});

	//fades out visible divs in #main
	$('a.headerClick').click(function() {
		$('#main').load('home.html').hide().fadeIn(700);
		$('.topAddress').delay(700).fadeIn(700);
	});

	// about hover
	/*$('.about a').hover(function() {
		$(this).addClass('hoverNav')
		.css("color", '#EE3124');

	},
	function () {
		$(this).removeClass('hoverNav')
		.css('color','#111');
	});*/

	// about click
	$('.about a').click(function() {
		$(this).addClass('hoverNav selected');
			$(this).css('color','#EE3124');
		//$(this)
		$('.portfolioDropdown').slideUp(700, function(){
			// end animation
		}

		);
		$('#main').load('about.html').hide().fadeIn(700);
	});

	// portfolio click
	$('.portfolio').click(function() {
		// adds color on click
		$('.portfolio a').addClass('hoverNav selected')
		.css('color','#EE3124');
		// fades in portfolio.html
		$('#main').load('portfolio.html').hide().fadeIn(700);
		$('.portfolioDropdown').slideToggle(700, function(){
			// end animation
		}

		);
	});

	// books click
	$('.books').click(function() {
		$('.books a').addClass('textClick')
		$('#main').load('books.html').hide().fadeIn(700);
	});

	// brochures click
	$('.brochures').click(function() {
		$('.brochures a').addClass('textClick')
		$('#main').load('brochures.html').hide().fadeIn(700);
	});

	// ephemera click
	$('.ephemera').click(function() {
		$('.ephemera a').addClass('textClick')
		$('#main').load('ephemera.html').hide().fadeIn(700);
	});

	// clientList click
	$('.clientList').click(function() {
		$('.clientList a').addClass('textClick')
		$('#main').load('clientList.html').hide().fadeIn(700);
		$('.portfolioDropdown').slideUp(700, function(){
			// end animation
		});

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





