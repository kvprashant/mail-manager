FlowRouter.notFound = {
  action: function() {
    console.log("Bad route found");
    BlazeLayout.render("nothingTemplate"); 
  }
};

FlowRouter.route('/unsubscribe/:userId', {
  action: function(params) {
    Meteor.call('unsubscribeThisUser', params.userId, new Date(), function(error, result){
      if(error)
        FlowLayout.render("errorTemplate");
      if(result)
        FlowLayout.render("confirmationTemplate"); 
    });
  }
});
