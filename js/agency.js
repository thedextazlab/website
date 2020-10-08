/*!
 * THEDEXTAZLAB STUDIOS
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    var currentURL = location.href;
    if(currentURL.indexOf("egg")>0){
        $('section#contact .form-group textarea.form-control').attr({placeholder: 'Tell us what you need. Don\'t forget your discount CODE: ' + getURLParams('utm_content').toUpperCase()});
    }

});

function getURLParams(k){
    var p={};
    location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
    return k?p[k]:p;
   }

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});
// Page has loaded? Let's do some extra magic
$(window).one('load', function(e) {
  $('nav').addClass('DONE').removeClass('LOADING');
  $('.patron').addClass('patron-animate');
  story = ["Well, I am not sure why you are here, but you must be a geek. Nobody reads console logs unless they skipped a shower... seriously, what are you looking for? Hehe!",
   "..." 
]
  for(i=0;i<story.length;i++){
    console.log(story[i]);
  }
  
});
