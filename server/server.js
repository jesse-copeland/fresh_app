Meteor.startup(function () {
  var seedItems = [
    {
      "name": "Pain drug",
      "expirationDate": "Sat Feb 14 2015 12:00:00 GMT-1000 (HST)"
    },
    {
      "name": "Allergy Medication",
      "expirationDate": "Tue Mar 17 2015 12:00:00 GMT-1000 (HST)"
    },
    {
      "name": "Heart Medication",
      "expirationDate": "Sat Feb 14 2015 12:00:00 GMT-1000 (HST)"
    },
    {
      "name": "Cough syrup",
      "expirationDate": "Tue Jan 11 2016 12:00:00 GMT-1000 (HST)"
    }
  ];

  if (Prescriptions === undefined || Prescriptions.find().length === 0) {
    seedItems.forEach(function (item) {
      Prescriptions.insert({
        createdAt: new Date(),
        name: item.name,
        expirationDate: item.expirationDate
      });
    });
  }
});