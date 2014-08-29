//= require_tree .

var coupon_id_from_url = $.url().param('c');

$(document).ready(function() {
  // Save coupon in cookie, if present
  if(coupon_id_from_url){
    // Set/replace coupon in cookie, strip trailing slashes
    $.cookie('coupon_id', coupon_id_from_url.replace(/\//g, ""));
  }

  // Add saved coupon to signup links on pricing page
  $links = $('a.signup');
  coupon_id_from_cookie = $.cookie('coupon_id');
  if(coupon_id_from_cookie){
    $links.each(function(){
      $(this).attr('href', $(this).attr('href') + "&c=" + coupon_id_from_cookie);
    });
  }


  // Updates page lightboxes
  $('.lightbox').nivoLightbox({
    effect: 'fadeScale'
  });




  // Blog sticky sidebar
  $('aside#sidebar').sticky({topSpacing:0});




  // Tooltips on pricing page for explanations
  $('.customers_tooltip, .teammates_tooltip').tipr({mode: 'top'});


  // One-page homepage variation, expand hidden content
  $('.click_to_expand_benefits').click(function(e){
    e.preventDefault();

    $(this).fadeOut(function(){
      $('.expandable').show();
    });
  });




  // Force-unlock guides (for using different computers, clicking link from phone, etc.)
  var guides_unlocked = $.url().param('unlocked');
  if(guides_unlocked){
    $.cookie('guides_unlocked', true);
  }
  if($.cookie('guides_unlocked')){
    unlock_guides();
  }

  // AJAX Campaign Monitor Subscribe Form
  $('#subscribe_form, #waitlist_form').submit(function (e) {
    e.preventDefault();
    $btn = $(this).children('button');
    $btn.addClass('loading');
    $btn.attr('disabled', 'disabled');

    $.getJSON(
      this.action + "?callback=?",
      $(this).serialize(),
      function (data) {
        $btn.removeClass('loading');
        $btn.attr('disabled', null);

        if (data.Status === 400) {
          $('#subscribe_email').addClass('error');
        } else { // 200
          // Set cookie, unlock guides, and show message
          $.cookie('guides_unlocked', true);
          unlock_guides();
          $('#subscribe_modal').modal('hide');
        }
      }
    );
  });

  // Hover states for eBook covers (flip over for more info)
  $('img.front', '.guide.available').click(function(){
    $(this).hide();
    $('img.back', $(this).parent()).show();
    $('.book_description', $(this).parent().parent()).show();
  });
  $('.book_description', '.guide').click(function(){
    $(this).fadeOut('slow');
    $('img.back', $(this).parent()).hide();
    $('img.front', $(this).parent()).show();
  })
});

function unlock_guides(){
  $('body').addClass('guides_unlocked');
}