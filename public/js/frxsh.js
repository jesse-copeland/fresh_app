MyCollection = new Mongo.Collection("tasks");

Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.add_item.helpers({

    tasks: function () {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });
}

Template.add_item.events({
  "click .save": function (event, template) {
    var inputValue = event.target.add_item.value;
    console.log(inputValue);

    Tasks.insert({
      text: text,
      createdAt: new Date() // current time
    });

    // Clear form
    event.target.text.value = "";

    // Prevent default form submit
    return false;
  },
    
});

 // This function is called when the item form is submitted
/*Template.add_item.events({
  "submit .text_input": function (event) {
   

    var text = event.target.text.value;


    Tasks.insert({
      text: text,
      createdAt: new Date() // current time
    });

    // Clear form
    event.target.text.value = "";

    // Prevent default form submit
    return false;
  }
});

 // This function is called when the date form is submitted
Template.add_item.events({
  "submit .date_expires": function (event){

    var text = event.target.text.value;

    Tasks.insert({
      text: text,
      createdAt: new Date() // current time
    });

    // Clear form
    event.target.text.value = "";

    // Prevent default form submit
    return false;
  }
});*/

//input save button


