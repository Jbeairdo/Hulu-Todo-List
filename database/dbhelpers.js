const {Tasks, QC} = require('./index.js');

const helpers = {

  //// GET ////
  getMiscTasks: (req, callback) => {
    Tasks.find()
    .then((results) => callback(null, results))
  },
  getQualityChecks: (req, callback) => {
    QC.find()
    .then((results) => callback(null, results))
  },

  //// POST ////
  postMiscTask: (req, callback) => {

  },
  postQualityCheck: (req, callback) => {
    QC.create({
      name: req.body.name,
      facebook: 0,
      twitter: 0
    })
    .then((results) => callback(null, results))
  },

  //// PUT ////
  incrementFB: (req, callback) => {
    console.log(req.params)
    QC.findOneAndUpdate(
      {name: req.params.name},
      {$inc: {facebook: 1}}
    )
    .then((results) => callback(null, results))
  },
  incrementTwitter: (req, callback) => {
    QC.findOneAndUpdate(
      {name: req.params.name},
      {$inc: {twitter: 1}}
    )
    .then((results) => callback(null, results))
  },
}

module.exports = helpers;