(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.modal-trigger').leanModal();
    $('ul.tabs').tabs();
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
      });
    $('.slider').slider({full_width: true});

    // Start Create Rendom user
    var url = "https://randomuser.me/api/?";
      $.getJSON( url, {
        'results': 7, // Number of Results
        //'key': api key here,
        //'seed': seed name here,
        //'gender': gender type,
        //'format': SQL, CSV, or YAML (Defualt JSON),
      },
      function( data ) {
        $('.loading').remove();
        $('.user-list').addClass('loaded');
        $.each( data.results, function( i, item ) {
          var item = this.user,
          user = {
            name: item.name.first + ' ' + item.name.last,
            id: item.username,
            img: {thumb: item.picture.thumbnail, med: item.picture.medium },
            city: item.location.hasOwnProperty('city') ? item.location.city : item.location.county,
            state: item.location.hasOwnProperty('state') ? item.location.state : item.location.region,
          },
          loc = user.city+', '+ user.state,

          html = '<div class="chip"><img src="'+user.img.thumb+'" alt=""> <span class="name">'+user.name+ '</span> </div>';

           $(html).appendTo('.user-list');
        });

        $('.user-list').on('click','li',function(e){
        e.preventDefault();

        if(!$(this).hasClass('active')){ $('.user-list li').removeClass('active'); $(this).toggleClass('active');}else{$(this).removeClass('active'); }
        });
     }); // end of random user

  }); // end of document ready
})(jQuery); // end of jQuery name space


  	//Stop Video Playing when close modal
	$('.modal-close, .lean-overlay').click(function () {
	  //$('.video-container').hide();
	  $('.video-container iframe').attr("src", jQuery(".video-container iframe").attr("src"));
	});


// You can programmatically trigger a tab change with our select_tab
// $(document).ready(function(){
//    $('ul.tabs').tabs('select_tab', 'tab_id');
//  });

/*
  I used http://randomuser.me/ to generate
  a random user. Just to add some fanciness.
*/





