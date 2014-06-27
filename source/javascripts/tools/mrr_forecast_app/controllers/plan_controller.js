MRRForecastApp.PlanController = Ember.ObjectController.extend({
  actions: {
    editPlan: function() {
      this.set('isEditing', true);
    },
    savePlan: function() {
      this.set('isEditing', false);
      this.get('model').save();
    },
    removePlan: function() {
      var plan = this.get('model');
      plan.deleteRecord();
      plan.save();
    }
  },
  isEditing: false
});