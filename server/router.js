const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/misc')
  .get(controller.getMiscTasks)
  .post(controller.postMiscTask)

router
  .route('/misc/:id')
  .delete(controller.deleteTask)

router
  .route('/quality_checks')
  .get(controller.getQualityChecks)
  .post(controller.postQualityCheck)

router
  .route('/quality_checks/:name')
  .delete(controller.deleteQualityCheck)

router
  .route('/facebook/:name')
  .put(controller.incrementFB)

router
  .route('/twitter/:name')
  .put(controller.incrementTwitter)

module.exports = router;