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

Template.item.helpers({
  formatDate: function (dateObj) {
    var res = dateObj.getFullYear() + ' ' + (dateObj.getMonth() + 1) + ' ' + dateObj.getDate();
    return res;
  }
});
