(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.modal-trigger').leanModal();
    $('ul.tabs').tabs();

  }); // end of document ready
})(jQuery); // end of jQuery name space


  	//Stop Video Playing when close modal
	$('.modal-close, .lean-overlay').click(function () {
	  //$('.video-container').hide();
	  $('.video-container iframe').attr("src", jQuery(".video-container iframe").attr("src"));
	});
