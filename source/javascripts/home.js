var stripe_coupon_id = $.url().param('c');

$(document).ready(function(){
  if(stripe_coupon_id)
    $("a.signup").each(function() {
      var _href = $(this).attr("href");
      $(this).attr("href", _href + '&c=' + stripe_coupon_id.replace('/', ''));

      $(this).append('<span>and redeem coupon</span>');
    });

  // Set initial height of email preview
  if($('body').width() >= 960 ){
    $('#email_preview').css('height', 667);
  }else{
    $('#email_preview').css('height', 574);
  }

  // Sample Emails
  $('a', '#stripe_events').click(function(){
    $link = $(this);

    // Change Active Email Preview
    if($('body').width() >= 960 ){
      width = $link.data('height');
    }else{
      width = $link.data('responsive-height');
    }

    $('#email_preview').css('height', width);
    $('body')
    $('img', '#email_preview').removeClass('active');
    $('img#' + $link.data('img'), '#email_preview').addClass('active');

    // Change Active Stripe Event
    $('a', '#stripe_events').removeClass('active');
    $link.addClass('active');

    return false;
  });
});