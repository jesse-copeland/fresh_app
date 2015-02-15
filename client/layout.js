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
    var item_name = $('#item_name').val();
    var item_date = $('#date').val();
    console.log(item_name);
    

    Prescriptions.insert({
      name: item_name,
      expirationDate: item_date,
      createdAt: new Date() // current time
    });

    // Clear form
    $('#item_name').val('');
    $('#date').val('');

    // Prevent default form submit
    return false;
  },
    
});

// In your client code: asynchronously send an email
// Meteor.call('sendReminder',
//             '8083543054@txt.att.net',
//             'FRxsh Reminder',
//             'message content');

