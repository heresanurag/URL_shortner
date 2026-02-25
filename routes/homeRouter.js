const express = require('express');
const { url_shortner, redirectUrl } = require('../controllers/homeController');
const router = express.Router();


router.post("/",url_shortner);
router.get('/:shortId',redirectUrl)

module.exports = router;
