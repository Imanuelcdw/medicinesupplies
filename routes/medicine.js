const express = require('express')
const { all, store, show, update, destroy } = require('../controllers/medicine')

const router = express.Router()

router.route('/').get(all).post(store)
router.route('/:_id').get(show).patch(update).delete(destroy)

module.exports = router
