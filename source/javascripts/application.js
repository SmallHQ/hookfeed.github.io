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
});