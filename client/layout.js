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

// In your client code: asynchronously send an email
// Meteor.call('sendReminder',
//             '8083543054@txt.att.net',
//             'FRxsh Reminder',
//             'message content');
