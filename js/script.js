//
// Gentlemen, start your engines...
//
//3... 2.... 1.... BAP!

$(function() { 
// Load home page image on document load 
	$('#main').load('home.html').hide().fadeIn(700);
	$()

	// fades out top-right address on all nav clicks
	$('.navText a').click(function() {
			$('.topAddress').fadeOut(700);
		});

	//fades out visible divs in #main
	$('a.headerClick').click(function() {
		$('li#portfolioDropdownLi').slideUp(400);
		$('.navClick').css({
				'font-weight': '400',
				'color':'#111'
    		}, 700);
		$('#main').load('home.html').hide().fadeIn(700);
		$('.topAddress').delay(700).fadeIn(700);
	});

	// About Click Stuff
	$('a.aboutA').click(function() {
		$('#main').load('about.html').hide().fadeIn(700);
		// Closes portfolio dropdown if open
		$('li#portfolioDropdownLi').slideUp(400);
		$(this).css({
			'font-weight':'800',
			'color' : '#EE3124'
		}).addClass('clicked');

		if($(this).css('font-weight') === '800') {
			$('.navClick:not(a.aboutA)').css({
				'font-weight': '400',
				'color':'#111'
    		}, 700);
		};
	});

	// Portfolio Click Stuff
	$('a.portfolioA').click(function() {
		$('#main').load('portfolio.html').hide().fadeIn(700);
		$('li#portfolioDropdownLi').slideDown(400);
		$(this).css({
			'font-weight':'800',
			'color' : '#EE3124'
		}).addClass('clicked');

		if($(this).css('font-weight') === '800') {
			$('.navClick:not(a.portfolioA)').css({
				'font-weight': '400',
				'color':'#111'
    		}, 700);
		};
	});

	// Books Click Stuff
	$('a.booksA').click(function() {
		$('#main').load('books.html').hide().fadeIn(700);
		$(this).css({
			'font-weight':'800',
			'color' : '#A484BB'
		}).addClass('clicked');

		if($(this).css('font-weight') === '800') {
			$('.navClick:not(a.booksA)').css({
				'font-weight': '400',
				'color':'#111'
    		});
		};
	});

	// Brochures Click Stuff
	$('a.brochuresA').click(function() {
		$('#main').load('brochures.html').hide().fadeIn(700);
		$(this).css({
			'font-weight':'800',
			'color' : '#F0902F'
		}).addClass('clicked');

		if($(this).css('font-weight') === '800') {
			$('.navClick:not(a.brochuresA)').css({
				'font-weight': '400',
				'color':'#111'
    		});
		};
	});

	// Ephemera Click Stuff
	$('a.ephemeraA').click(function() {
		$('#main').load('ephemera.html').hide().fadeIn(700);
		$(this).css({
			'font-weight':'800',
			'color' : '#8AC749'
		}).addClass('clicked');

		if($(this).css('font-weight') === '800') {
			$('.navClick:not(a.ephemeraA)').css({
				'font-weight': '400',
				'color':'#111'
    		});
		};
	});

	// clientList Click Stuff
	$('a.clientListA').click(function() {
		$('#main').load('clientList.html').hide().fadeIn(700);
		// Closes portfolio dropdown if open
		$('li#portfolioDropdownLi').slideUp(400);
		$(this).css({
			'font-weight':'800',
			'color' : '#EE3124'
		}).addClass('clicked');

		if($(this).css('font-weight') === '800') {
			$('.navClick:not(a.clientListA)').css({
				'font-weight': '400',
				'color':'#111'
    		});
		};
	});
}); // End Nav clickiness

$(function() { 
	$('a.booksClick1').click(function() {
		$('#booksSlideshowWrapper').load('sliders/bookSlider1.html')
	});
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



