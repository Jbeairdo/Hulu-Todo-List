const helpers = require('../database/dbhelpers.js');

const controller = {
  //// GET ////
  getMiscTasks: (req, res) => {
    helpers.getMiscTasks(req, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data)
      }
    })
  },
  getQualityChecks: (req, res) => {
    helpers.getQualityChecks(req, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data)
      }
    })
  },
  //// POST ////
  postMiscTask: (req, res) => {

  },
  postQualityCheck: (req, res) => {
    helpers.postQualityCheck(req, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data)
      }
    })
  },

  //// PUT ////
  incrementFB: (req, res) => {
    helpers.incrementFB(req, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data)
      }
    })
  },
  incrementTwitter: (req, res) => {
    helpers.incrementTwitter(req, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data)
      }
    })
  },
}

module.exports = controller;