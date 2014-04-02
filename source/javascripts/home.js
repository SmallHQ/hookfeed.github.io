var stripe_coupon_id = $.url().param('c');

$(document).ready(function(){
  if(stripe_coupon_id)
    $("a.signup").each(function() {
      var _href = $(this).attr("href");
      $(this).attr("href", _href + '&c=' + stripe_coupon_id.replace('/', ''));

      $(this).append('<span>and redeem coupon</span>');
    });

  // Sample Emails
  $('a', '#stripe_events').click(function(){
    $link = $(this);

    // Change Active Email Preview
    $('#email_preview').attr('height', $link.data('height'));
    $('img', '#email_preview').attr('src', $link.data('src'));

    // Change Active Stripe Event
    $('a', '#stripe_events').removeClass('active');
    $link.addClass('active');

    return false;
  });
});