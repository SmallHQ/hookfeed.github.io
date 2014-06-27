window.MRRForecastApp = Ember.Application.create();
MRRForecastApp.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'mrr_forecast_app_plans'
});