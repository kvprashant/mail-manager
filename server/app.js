Meteor.methods({
  'unsubscribeThisUser': function(_id, unsub_time){
    check(_id, String);
    var unsubUser = EmailList.find({ _id : _id, EMAIL_TYPE: { $ne: "none" } });
    if(!unsubUser.count()){
      console.log("Unsubscribe request failed " + _id)
      throw new Meteor.Error("bad-subscriber", "There is not subscriber who goes by this label");
    } else if(unsubUser.count()>0) {
        console.log('Unsubscribing this user: ' + _id);
        EmailList.update(
          { _id : _id  },
          { 
            $set: 
              { 
                LAST_CHANGED : new Date(unsub_time), 
                EMAIL_TYPE : "none" 
              } 
          }
        );
    }
    return "unsub-success"; 
  }
})
