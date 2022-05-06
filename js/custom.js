//Tooltip
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

//Page Scroll Indicator
$(document).ready(function() {
  $(window).scroll(function() {
    var wintop = $(window).scrollTop(); 
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolled = (wintop/(docheight-winheight))*100;
    $('.progress-bar').css('width', (scrolled + '%'));
  });
});

//Hamburger Menu
$(document).ready(function() {
  $('.icon-ham').click(function() {
    $('nav').fadeToggle(300);
    $('.icon-ham').toggleClass('active'); 
  });
});


//Send A Message Form
$(document).ready(function() {
  $('.form-open-button').click(function() {
    $('#send-a-message').show('slow','swing');
  });
  $('.form-close-button').click(function() {
    $('#send-a-message').hide('slow','swing');
  });  
});

//Send A Message Form
$(document).ready(function() {
  $('.heading-slider').slick({
    vertical: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300
  });
});

//Word Slider
jQuery(document).ready(function($){
	//set animation timing
	var animationDelay = 2500,
		//letters effect
		lettersDelay = 50,
		//type effect
		typeLettersDelay = 150,
		selectionDuration = 500,
		typeAnimationDelay = selectionDuration + 800,
		//clip effect 
		revealDuration = 600,
		revealAnimationDelay = 1500;
	
	initHeadline();

	function initHeadline() {
		//insert <i> element for each letter of a changing word
		singleLetters($('.cd-headline.letters').find('p'));
		//initialise headline animation
		animateHeadline($('.cd-headline'));
	}

	function singleLetters($words) {
		$words.each(function(){
			var word = $(this),
				letters = word.text().split(''),
				selected = word.hasClass('is-visible');
			for (i in letters) {
				letters[i] = (selected) ? '<b class="in">' + letters[i] + '</b>': '<b>' + letters[i] + '</b>';
			}
		    var newLetters = letters.join('');
		    word.html(newLetters).css('opacity', 1);
		});
	}

	function animateHeadline($headlines) {
		var duration = animationDelay;
		$headlines.each(function(){
			var headline = $(this);

			//trigger animation
			setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
		});
	}

	function hideWord($word) {
		var nextWord = takeNext($word);
		
		if($word.parents('.cd-headline').hasClass('letters')) {
			var bool = ($word.children('b').length >= nextWord.children('b').length) ? true : false;
			hideLetter($word.find('b').eq(0), $word, bool, lettersDelay);
			showLetter(nextWord.find('b').eq(0), nextWord, bool, lettersDelay);
    }
    else {
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, animationDelay);
		}
	}

	function hideLetter($letter, $word, $bool, $duration) {
		$letter.removeClass('in').addClass('out');
		
		if(!$letter.is(':last-child')) {
		 	setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);  
		} else if($bool) { 
		 	setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
		}

		if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
			var nextWord = takeNext($word);
			switchWord($word, nextWord);
		} 
	}

	function showLetter($letter, $word, $bool, $duration) {
		$letter.addClass('in').removeClass('out');
		
		if(!$letter.is(':last-child')) { 
			setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration); 
    } 
    else if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay)
		}
	}

	function takeNext($word) {
		return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
	}

	function takePrev($word) {
		return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
	}

	function switchWord($oldWord, $newWord) {
		$oldWord.removeClass('is-visible').addClass('is-hidden');
		$newWord.removeClass('is-hidden').addClass('is-visible');
	}
});

//Multistep form
$(document).ready(function() {
var current_fs, next_fs, previous_fs; //fieldsets

	$(".next").click(function() {
		current_fs = $(this).parents("fieldset");
		next_fs = $(this).parents("fieldset").next();
		
		//activate next step on progressbar using the index of next_fs
		$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
		
		//show the next fieldset
		next_fs.fadeIn('slow'); 

		//hide the current fieldset
		current_fs.hide();

	});

	$(".previous").click(function() {
		current_fs = $(this).parents("fieldset");
		previous_fs = $(this).parents("fieldset").prev();
		
		//de-activate current step on progressbar
		$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
		
		//show the previous fieldset
		previous_fs.fadeIn('slow'); 
		//hide the current fieldset
		current_fs.hide();
		
	});

	$(".submit").click(function(){
		return false;
	});
});