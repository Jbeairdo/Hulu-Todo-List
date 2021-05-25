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
  .route('/misc/:id/title')
  .put(controller.editTaskTitle)

router
  .route('/misc/:id/description')
  .put(controller.editTaskDescription)

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

  router
  .route('/facebook_minus/:name')
  .put(controller.decrementFB)

router
  .route('/twitter_minus/:name')
  .put(controller.decrementTwitter)

module.exports = router;