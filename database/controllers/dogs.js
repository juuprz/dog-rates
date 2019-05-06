const Doge = require('../models/dogs.js');

// const findDogeAndUpdate = (req, res) => {
//   let guest = new Rsvp(req.body);
//   let email = req.body.email;
//   // update if the user has registered prior, otherwise create the doc in the db
//   Rsvp.findOneAndUpdate({ email: email }, guest, { upsert: true }, () => {
//     console.log('document created or updated in the db');
//   })
// };
const postDoge = (req, res) => {
  let url = req.body.imageUrl;
  let score = Date.now();
  let doge = new Doge({
    url: url,
    popularity_score: score
  })
  doge.save((err, doge) => {
    if (err) {
      res.sendStatus(404);
      console.log(err);
    } else {
      res.sendStatus(200);
    }
  })
}
module.exports = postDoge;