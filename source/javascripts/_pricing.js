Number.prototype.format = function(n, x) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

var coupon_id = $.url().param('c');
var pricing_plans = $.url().param('p') || "m_39900_10_1501_3000,m_24900_5_501_1500,m_12900_3_101_500,m_3900_2_26_100,m_0_1_0_25";
var plan_names = $.url().param('n') || "Pro,Business,Team,Starter";
var pricing_plans_array = pricing_plans.split(',');
var plan_names_array = plan_names.split(',');
var plan1_parts = pricing_plans_array[0].split('_');
var plan2_parts = pricing_plans_array[1].split('_');
var plan3_parts = pricing_plans_array[2].split('_');
var plan4_parts = pricing_plans_array[3].split('_');
var free_plan_parts = pricing_plans_array[4].split('_');

var plan1 = {
  plan_id: pricing_plans_array[0],
  plan_name: plan_names_array[0],
  monthly_plan_id: monthlyPlanId(pricing_plans_array[0]),
  yearly_plan_id: yearlyPlanId(pricing_plans_array[0]),
  monthly_amount: "$" + monthlyAmount(pricing_plans_array[0]).format(),
  yearly_amount: "$" + yearlyAmount(pricing_plans_array[0]).format(),
  customers_limit: parseInt(plan1_parts[4]),
  teammates_limit: parseInt(plan1_parts[2])
}
var plan2 = {
  plan_id: pricing_plans_array[1],
  plan_name: plan_names_array[1],
  monthly_plan_id: monthlyPlanId(pricing_plans_array[1]),
  yearly_plan_id: yearlyPlanId(pricing_plans_array[1]),
  monthly_amount: "$" + monthlyAmount(pricing_plans_array[1]).format(),
  yearly_amount: "$" + yearlyAmount(pricing_plans_array[1]).format(),
  customers_limit: parseInt(plan2_parts[4]),
  teammates_limit: parseInt(plan2_parts[2])
}
var plan3 = {
  plan_id: pricing_plans_array[2],
  plan_name: plan_names_array[2],
  monthly_plan_id: monthlyPlanId(pricing_plans_array[2]),
  yearly_plan_id: yearlyPlanId(pricing_plans_array[2]),
  monthly_amount: "$" + monthlyAmount(pricing_plans_array[2]).format(),
  yearly_amount: "$" + yearlyAmount(pricing_plans_array[2]).format(),
  customers_limit: parseInt(plan3_parts[4]),
  teammates_limit: parseInt(plan3_parts[2])
}
var plan4 = {
  plan_id: pricing_plans_array[3],
  plan_name: plan_names_array[3],
  monthly_plan_id: monthlyPlanId(pricing_plans_array[3]),
  yearly_plan_id: yearlyPlanId(pricing_plans_array[3]),
  monthly_amount: "$" + monthlyAmount(pricing_plans_array[3]).format(),
  yearly_amount: "$" + yearlyAmount(pricing_plans_array[3]).format(),
  customers_limit: parseInt(plan4_parts[4]),
  teammates_limit: parseInt(plan4_parts[2])
}
var free_plan = {
  plan_id: pricing_plans_array[4],
  plan_name: 'free plan',
  monthly_plan_id: monthlyPlanId(pricing_plans_array[4]),
  yearly_plan_id: yearlyPlanId(pricing_plans_array[4]),
  monthly_amount: "$" + monthlyAmount(pricing_plans_array[4]).format(),
  yearly_amount: "$" + yearlyAmount(pricing_plans_array[4]).format(),
  customers_limit: parseInt(free_plan_parts[4]),
  teammates_limit: parseInt(free_plan_parts[2])
}

$(document).ready(function() {
  populatePlans(false); // set to monthly prices on load

  $('input', '#annual_toggle').change(function(){
    $(this).parent().toggleClass('active');
    populatePlans(this.checked);
  });

  // Check box if passed annual plans
  if(plan1_parts[0] == 'y'){
    $('input', '#annual_toggle').click();
  }
});

function populatePlans(checked){
  $('.pricing_bucket').each(function(index, element){
    $this = $(this);
    $inner = $this.children('.inner');
    plan = eval('plan' + (index+1));

    if(checked){
      // Yearly
      price = plan.yearly_amount + "<span>/year</span>"
    }else{
      //Monthly
      price = plan.monthly_amount + "<span>/month</span>"
    }

    $inner.children('h2').text(plan.plan_name);
    $inner.children('h3').html(price);
    $inner.children('ul').children('li.teammates_limit').html("<span>" + plan.teammates_limit.format() + "</span><strong>Teammates</strong>");
    $inner.children('ul').children('li.customers_limit').html("<span>" + plan.customers_limit.format() + "</span><strong>Paying Customers</strong>");
    updateSignupLink($inner.children('a.signup'), plan, checked, false);
  });

  $('span', '#free_plan').text(free_plan.customers_limit.format());
  updateSignupLink($('a', '#free_plan'), free_plan, checked, true);
}

function monthlyAmount(plan_id){
  interval = plan_id.split('_')[0];
  interval_amount = plan_id.split('_')[1];

  if(interval == 'm'){
    return parseInt(interval_amount)/100;
  }else if(interval == 'y'){
    return parseInt(interval_amount / 10)/100;
  }
}

function yearlyAmount(plan_id){
  interval = plan_id.split('_')[0];
  interval_amount = plan_id.split('_')[1];

  if(interval == 'm'){
    return parseInt(interval_amount * 10)/100;
  }else if(interval == 'y'){
    return parseInt(interval_amount)/100;
  }
}

function monthlyPlanId(plan_id){
  interval = plan_id.split('_')[0];

  if(interval == 'm'){
    return plan_id;
  }else if(interval == 'y'){
    return "m_" + (monthlyAmount(plan_id) * 100) + "_" + plan_id.split('_')[2] + "_" + plan_id.split('_')[3] + "_" + plan_id.split('_')[4];
  }
}

function yearlyPlanId(plan_id){
  interval = plan_id.split('_')[0];

  if(interval == 'm'){
    return "y_" + (yearlyAmount(plan_id) * 100) + "_" + plan_id.split('_')[2] + "_" + plan_id.split('_')[3] + "_" + plan_id.split('_')[4];
  }else if(interval == 'y'){
    return plan_id;
  }
}

function updateSignupLink($link, plan_object, yearly, ignore_interval){
  if(ignore_interval == false){
    if(yearly){
      plan_id = plan_object.yearly_plan_id;
    }else{
      plan_id = plan_object.monthly_plan_id;
    }
  }else{
    plan_id = plan_object.plan_id;
  }

  new_href = $link.attr('href').split('?')[0] + "?s=" + plan_id + "&p=" + pricing_plans;

  // Add coupon, if present
  if(coupon_id){
    new_href = new_href + "&c=" + coupon_id;
  }

  $link.attr('href', new_href);
}