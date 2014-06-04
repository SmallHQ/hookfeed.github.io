Number.prototype.format = function(n, x) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

var pricing_plans = $.url().param('p') || "m_39900_10_1501_3000,m_24900_5_501_1500,m_12900_3_101_500,m_3900_2_26_100,m_0_1_0_25";
var pricing_plans_array = pricing_plans.split(',');
var plan1_parts = pricing_plans_array[0].split('_');
var plan2_parts = pricing_plans_array[1].split('_');
var plan3_parts = pricing_plans_array[2].split('_');
var plan4_parts = pricing_plans_array[3].split('_');
var free_plan_parts = pricing_plans_array[0].split('_');

var plan1 = {
  plan_id: pricing_plans_array[0],
  monthly_amount: "$" + (parseInt(plan1_parts[1])/100).format(),
  yearly_amount: "$" + (parseInt(plan1_parts[1] * 10)/100).format(),
  customers_limit: parseInt(plan1_parts[4]),
  teammates_limit: parseInt(plan1_parts[2])
}
var plan2 = {
  plan_id: pricing_plans_array[1],
  monthly_amount: "$" + (parseInt(plan2_parts[1])/100).format(),
  yearly_amount: "$" + (parseInt(plan2_parts[1] * 10)/100).format(),
  customers_limit: parseInt(plan2_parts[4]),
  teammates_limit: parseInt(plan2_parts[2])
}
var plan3 = {
  plan_id: pricing_plans_array[2],
  monthly_amount: "$" + (parseInt(plan3_parts[1])/100).format(),
  yearly_amount: "$" + (parseInt(plan3_parts[1] * 10)/100).format(),
  customers_limit: parseInt(plan3_parts[4]),
  teammates_limit: parseInt(plan3_parts[2])
}
var plan4 = {
  plan_id: pricing_plans_array[3],
  monthly_amount: "$" + (parseInt(plan4_parts[1])/100).format(),
  yearly_amount: "$" + (parseInt(plan4_parts[1] * 10)/100).format(),
  customers_limit: parseInt(plan4_parts[4]),
  teammates_limit: parseInt(plan4_parts[2])
}
var free_plan = {
  plan_id: pricing_plans_array[4],
  monthly_amount: "$" + (parseInt(free_plan_parts[1])/100).format(),
  yearly_amount: "$" + (parseInt(free_plan_parts[1] * 10)/100).format(),
  customers_limit: parseInt(free_plan_parts[4]),
  teammates_limit: parseInt(free_plan_parts[2])
}

$(document).ready(function() {
  toggleInterval(false); // set to monthly prices on load

  $('input', '#annual_toggle').change(function(){
    $(this).parent().toggleClass('active');
    toggleInterval(this.checked);
  });

  console.log(plan1);
  console.log(plan2);
  console.log(plan3);
  console.log(plan4);
});

function toggleInterval(checked){
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

    $inner.children('h3').html(price);
    $inner.children('ul').children('li.teammates_limit').html("<span>" + plan.teammates_limit + "</span><strong>Teammates</strong>");
    $inner.children('ul').children('li.customers_limit').html("<span>" + plan.customers_limit + "</span><strong>Paying Customers</strong>");
  });
}