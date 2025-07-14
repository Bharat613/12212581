const express = require('express')
const {generateShortId, getAnalytics} = require('../controllers/url')

const router = express.Router()

router.post('/',generateShortId);



router.get('/analytics/:id',getAnalytics);


module.exports = router;