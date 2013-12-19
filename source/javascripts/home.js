var stripe_coupon_id = $.url().param('c');

$(document).ready(function(){
  window.setTimeout(function(){
    $('[data-typer-targets]').typer({
      highlightSpeed    : 400,
      typeSpeed         : 50,
      clearDelay        : 200,
      typeDelay         : 100,
      clearOnHighlight  : true,
      typerInterval     : 4000
    });
  }, 2000);

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