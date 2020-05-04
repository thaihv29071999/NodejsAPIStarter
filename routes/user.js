const express = require('express')

const router = express.Router()

const userController = require('../controller/user')

router.route('/')
    .get(userController.index)
    .post()
    .patch()
    .put()
    .delete()

module.exports = router
