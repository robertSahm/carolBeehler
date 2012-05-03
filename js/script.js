







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

*/



});  







