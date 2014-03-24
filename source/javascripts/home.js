var stripe_coupon_id = $.url().param('c');

$(document).ready(function(){
  if(stripe_coupon_id)
    $("a.signup").each(function() {
      var _href = $(this).attr("href");
      $(this).attr("href", _href + '&c=' + stripe_coupon_id);
    });

  /* On Page Load (i.e. back button) */
  $('input[type="checkbox"]', 'form.annual_offer').each(function(){
    updatePricingFor($(this));
  });

  /* On Checked/Unchecked */
  $('input[type="checkbox"]', 'form.annual_offer').change(function(){
    updatePricingFor($(this));
  });

  // Lookup charges
  // Set time to 30 days ago if we have JS and fade in button
  $('a', '#charge_instructions').attr('href', 'https://manage.stripe.com/payments?created%5Bgte%5D=' + Math.floor((30).days().ago().getTime()/1000));
  $('#lookup_charges').show();

  $('#lookup_charges').click(function(){
    $(this).fadeOut(300, function(){
      $('#charge_instructions').fadeIn(300);
    });

    return false;
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

function updatePricingFor($checkbox){
  if ($checkbox.is(':checked')) {
    switchToYearlyPricing($checkbox);
    yearlySignupButton($checkbox);
  } else {
    switchToMonthlyPricing($checkbox);
    monthlySignupButton($checkbox);
  }
}

function switchToMonthlyPricing($checkbox){
  $checkbox.parent().parent().siblings('.yearly_price').hide();
  $checkbox.parent().parent().siblings('.monthly_price').show();
}

function switchToYearlyPricing($checkbox){
  $checkbox.parent().parent().siblings('.monthly_price').hide();
  $checkbox.parent().parent().siblings('.yearly_price').show();
}

function yearlySignupButton($checkbox){
  $button = $checkbox.parent().parent().siblings('a.signup');

  if(stripe_coupon_id){
    $button.attr('href', $button.attr('href').split('?')[0] + '?p=' + $checkbox.data('yearly-plan-id') + '&c=' + stripe_coupon_id);
  }else{
    $button.attr('href', $button.attr('href').split('?')[0] + '?p=' + $checkbox.data('yearly-plan-id'));
  }
}

function monthlySignupButton($checkbox){
  $button = $checkbox.parent().parent().siblings('a.signup');

  if(stripe_coupon_id){
    $button.attr('href', $button.attr('href').split('?')[0] + '?p=' + $button.data('monthly-plan-id') + '&c=' + stripe_coupon_id);
  }else{
    $button.attr('href', $button.attr('href').split('?')[0] + '?p=' + $button.data('monthly-plan-id'));
  }
}