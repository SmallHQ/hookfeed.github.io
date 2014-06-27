//= require tools/tools
//= require tools/mrr_forecast_app/base
//= require tools/mrr_forecast_app/models/plan
//= require tools/mrr_forecast_app/controllers/plans_controller
//= require tools/mrr_forecast_app/controllers/plan_controller

// Temporary
MRRForecastApp.Plan.FIXTURES = [
 {
   id: 1,
   name: 'Basic Plan',
   customer_count: 10,
   amount: 2900,
   interval: 'month',
   interval_count: 1,
   growth_rate: 5,
   churn_rate: 3,
   starts_on: '2014-06-04'
 },
 {
   id: 2,
   name: 'Starter Plan',
   customer_count: 5,
   amount: 5900,
   interval: 'month',
   interval_count: 1,
   growth_rate: 9,
   churn_rate: 2,
   starts_on: '2014-06-04'
 },
 {
   id: 3,
   name: 'Pro Plan',
   customer_count: 4,
   amount: 9900,
   interval: 'month',
   interval_count: 1,
   growth_rate: 15,
   churn_rate: 1,
   starts_on: '2014-06-04'
 }
];

MRRForecastApp.Router.map(function() {
  this.resource('plans', { path: '/' });
});

MRRForecastApp.PlansRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('plan');
  }
});