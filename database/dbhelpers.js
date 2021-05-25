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
    const {title, description} = req.body;
    Tasks.create({
      title: title,
      description: description
    })
    .then((results) => callback(null, results))
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
  decrementFB: (req, callback) => {
    QC.findOneAndUpdate(
      {name: req.params.name},
      {$inc: {facebook: -1}}
    )
    .then((results) => callback(null, results))
  },
  decrementTwitter: (req, callback) => {
    QC.findOneAndUpdate(
      {name: req.params.name},
      {$inc: {twitter: -1}}
    )
    .then((results) => callback(null, results))
  },
  editTaskTitle: (req, callback) => {
    Tasks.findOneAndUpdate(
      {_id: req.params.id},
      {$set: {title: req.body.title}}
    )
    .then((results) => callback(null, results))
  },
  editTaskDescription: (req, callback) => {
    Tasks.findOneAndUpdate(
      {_id: req.params.id},
      {$set: {description: req.body.description}}
    )
    .then((results) => callback(null, results))
  },

  //// DELETE ////
  deleteQualityCheck: (req, callback) => {
    QC.findOneAndDelete({name: req.params.name})
    .then((results) => callback(null, results))
  },
  deleteTask: (req, callback) => {
    Tasks.findOneAndDelete({_id: req.params.id})
    .then((results) => callback(null, results))
  },
}

module.exports = helpers;