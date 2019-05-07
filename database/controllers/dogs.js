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
const getTrendingDoges = (req, res) => {
  // want to retrieve the top 15 by their popularity score
  Doge.find({}, 'url').sort({ 'popularity_score': -1 }).limit(15)
    .then(doges => {
    res.send(JSON.stringify(doges))
  })
}
module.exports = {
  postDoge,
  getTrendingDoges
}

  