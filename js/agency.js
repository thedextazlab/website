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
  story = ["Well, I am not sure why you are here, but you must be a geek. Nobody reads console logs unless they missed a shower, never got the girl, not really got any cool friends - and they are driving a Scion xA. Well, I am none of those. Except, the Scion xA, which is the Toyota IST in our market here in Tanzania. A 2004 car, see it here: https://go.thedextazlab.com/thecarilovetohatebutiloveitanyway",
  "Okay, I just shared a link, did you click it? No? I will wait. Giving you 60 seconds... And the timer starts.... now!",
  "" ,
  "Interesting! Well, learned this kind of simple programming while I was 12. The year was 1997. A year before Sergey Brin and Larry Page at Stanford of all places, met and went crazy about BackRub. How I wish Google was just named exactly what it is - BackRub! A massage. Do you even know what BackRub means? Ask Larry, it was his idea all along. Since 1996, when I was 11. Now if you know the year when Larry was born (Hi Lawrence!), reverse the numbers? Then add my year of birth - that's the secret code to opening a special place full of hope for the world that comes after #COVID19 has done it's cleansing. Ethnic cleansing - that's what it is. Blacks dying more than anyone else. Yes, it sounds suspicious, but I can guarantee you it's not a conspiracy theory. Even the cool Neil deGrasse Tyson agrees with me, that the human virome multiplied by two googols, is less than the amount of quarks and antiquarks that are still dancing in the name of Heisenberg, for all that we are going through now - or that we have ever gone through before - or that will ever come and go - is just a mere blink of the Universe's chaos. I am only an Astrophysicist in a Hurry! Seriously, go read that book even if you hated science with all your friendly mutated son-of-a-bitches trillions of viruses inside you.",
  "Okay, that was a lot. Now the good stuff. Visit https://www.lab.co.tz/merch and let's spread love in the World. I take all the earnings and use them to buy supplies to my poor Tanzanian countrymen, who have no idea what to do as hell breaks loose around them, Our governments are people too, so they can fail us - big time. But WE ARE THE PEOPLE! WE CHOOSE HOW THIS ENDS, NOT OTHERWISE. YES, WE WERE MADE IN GOD'S IMAGE. AND, THAT SHOULD MATTER."
]
  console.log("!");
});
