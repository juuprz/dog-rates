const dogs = require('../models/dogs.js');

// const findDogAndUpdate = (req, res) => {
//   let guest = new Rsvp(req.body);
//   let email = req.body.email;
//   // update if the user has registered prior, otherwise create the doc in the db
//   Rsvp.findOneAndUpdate({ email: email }, guest, { upsert: true }, () => {
//     console.log('document created or updated in the db');
//   })
// };
// module.exports = findDogAndUpdate;