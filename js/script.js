



































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

	// About Click Stuff
	$('a#about a').click()
});










/*
	// about hover

	// about click
	$('li#about a').click(function() {
		$(this).addClass('clickNavAbout');
		alert('hollaatchaboy')
		//$('.portfolio a, .books a, .brochures a, .ephemera a, .clientList a').addClass('clickNavReset');
		$('.portfolioDropdown ul').slideUp(700, function(){
			// end animation
		});

		// Loads about.html
		$('#main').load('about.html').hide().fadeIn(700);
	});






























	// portfolio click
	$('#portfolio a').click(function() {
		// adds color on click
		$(this).addClass('clickNavPortfolio selected')
		//$('.about a, .books a, .brochures a, .ephemera a, .clientList a').addClass('clickNavReset');
		// fades in portfolio.html
		$('#main').load('portfolio.html').hide().fadeIn(700);
		$('ul.portfolioDropdown').slideToggle(700, function(){
			// end animation
		});
	});

	// books click
	$('.books a').click(function() {
		$(this).addClass('selected')
		if(!$(this).hasClass('selected')).addClass('clickNavBooks');
		//$('.about a, .portfolio a, .brochures a, .ephemera a, .clientList a').addClass('clickNavReset');
		$('#main').load('books.html').hide().fadeIn(700);
	});

	// brochures click
	$('.brochures a').click(function() {
		$(this).addClass('clickNavBrochures selected')
		//$('.about a, .portfolio a, .books a, .ephemera a, .clientList a').addClass('clickNavReset');
		$('#main').load('brochures.html').hide().fadeIn(700);
	});

	// ephemera click
	$('.ephemera a').click(function() {
		$(this).addClass('clickNavEphemera selected')
		//$('.about a, .portfolio a, .books a, brochures a, .clientList a').addClass('clickNavReset');
		$('#main').load('ephemera.html').hide().fadeIn(700);
	});

	// clientList click
	$('.clientList a').click(function() {
		$(this).addClass('clickNavClientList selected')
		$('#main').load('clientList.html').hide().fadeIn(700);
		//$('.about a, .portfolio a, .books a, brochures a, .ephemera a').addClass('clickNavReset');
		$('.portfolioDropdown ul').slideUp(700, function(){
			// end animation
		});
	});
}); // End all



































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

	// about hover
	/*$('.about a').hover(function() {
		$(this).addClass('hoverNav')
		.css("color", '#EE3124');

	},
	function () {
		$(this).removeClass('hoverNav')
		.css('color','#111');
	});*/



