MRRForecastApp.PlansController = Ember.ArrayController.extend({
  actions: {
    addPlan: function() {
      this.set('isAdding', true);
    },
    createPlan: function() {
      this.set('isAdding', false);

      // Get all fields
      // TODO: update validation for each field, i.e. interval count should fall back
      // to 1 if empty, instead of trimming.
      var name = this.get('newName');
      if (!name.trim()) { return; }
      var customer_count = this.get('newCustomer_count');
      if (!customer_count.trim()) { return; }
      var amount = this.get('newAmount');
      if (!amount.trim()) { return; }
      var interval_count = this.get('newInterval_count');
      if (!interval_count.trim()) { return; }
      var interval = this.get('newInterval');
      if (!interval.trim()) { return; }
      var growth_rate = this.get('newGrowth_rate');
      if (!growth_rate.trim()) { return; }
      var churn_rate = this.get('newChurn_rate');
      if (!churn_rate.trim()) { return; }
      var starts_on = this.get('newStarts_on');
      if (!starts_on.trim()) { return; }

      // Create the new Todo model
      var plan = this.store.createRecord('plan', {
        name: name,
        customer_count: customer_count,
        amount: amount,
        interval: interval,
        interval_count: interval_count,
        growth_rate: growth_rate,
        churn_rate: churn_rate,
        starts_on: starts_on
      });

      // Clear the "New Todo" text field
      this.set('newName', '');
      this.set('newCustomer_count', '');
      this.set('newAmount', '');
      this.set('newInterval_count', '');
      this.set('newInterval', '');
      this.set('newGrowth_rate', '');
      this.set('newChurn_rate', '');
      this.set('newStarts_on', '');

      // Save the new model
      plan.save();
    }
  },
  isAdding: false
});