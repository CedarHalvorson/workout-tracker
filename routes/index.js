const router = require('express').Router();
const routeApi = require('./routeApi');
const routeHtml = require('./routeHtml');

// these are my routes they route you to places


router.use('/api', routeApi);
router.use('/', routeHtml);

module.exports = router;