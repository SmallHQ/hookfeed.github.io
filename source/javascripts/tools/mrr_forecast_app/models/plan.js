MRRForecastApp.Plan = DS.Model.extend({
  name: DS.attr('string'),
  customer_count: DS.attr('number'),
  amount: DS.attr('number'),
  interval: DS.attr('string'),
  interval_count: DS.attr('number'),
  growth_rate: DS.attr('number'),
  churn_rate: DS.attr('number'),
  starts_on: DS.attr('string')
});