Router.route('/', function () {
  this.render('item_list');
});

Router.route('/add', function () {
  this.render('add_item');
});

Router.route('/profile', function () {
  this.render('profile');
});


Meteor.methods({
  sendReminder: function (to, subject, text) {
    this.unblock();

    Email.send({
      to: to,
      from: Meteor.user().emails[0].address,
      subject: subject,
      text: text
    });
  }
});
          
Template.item_list.prescriptionsList = function () {
  return Prescriptions.find();
};

Template.add_item.events({
  'click .save_button button': function (event, template) {
    console.log("hey");
    /*var inputValue = event.target.add_item.value;
    

    Tasks.insert({
      text: text,
      createdAt: new Date() // current time
    });

    // Clear form
    event.target.text.value = "";

    // Prevent default form submit
    return false;*/
  },
    
});

// In your client code: asynchronously send an email
// Meteor.call('sendReminder',
//             '8083543054@txt.att.net',
//             'FRxsh Reminder',
//             'message content');

