var pricing_plans = $.url().param('p');

$(document).ready(function() {
  $('input', '#annual_toggle').change(function(){
    $(this).parent().toggleClass('active');
  });

  if(!pricing_plans){
    pricing_plans = "m_0_1_0_25,m_3900_2_26_100,m_12900_3_101_500,m_24900_5_501_1500,m_39900_10_1501_3000";
  }

  plan1 = new Plan(pricing_plans[0]);
  plan2 = new Plan(pricing_plans[1]);
  plan3 = new Plan(pricing_plans[2]);
  plan4 = new Plan(pricing_plans[3]);

  plans = [
    {
      "name": "Starter",
      "customers_limit": plan1.customers_limit(),
      "teammates_limit": plan1.teammates_limit(),
      "monthly_price": plan1.monthly_price(),
      "yearly_price": plan1.yearly_price()
    }
  ]

});

function Plan(plan_id){
  self.plan_id = plan_id;
}

Plan.prototype.customers_limit = function(){
  return self.plan_id.split
}

function customers_limit(plan_number) {
  pricing_plans[plan_number].split('_')
}

function interval(plan_number) {

}