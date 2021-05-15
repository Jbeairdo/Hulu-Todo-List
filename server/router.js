const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/misc')
  .get(controller.getMiscTasks)
  .post(controller.postMiscTask)

router
  .route('/quality_checks')
  .get(controller.getQualityChecks)
  .post(controller.postQualityCheck)

router
  .route('/facebook/:name')
  .put(controller.incrementFB)

router
  .route('/twitter/:name')
  .put(controller.incrementTwitter)

module.exports = router;