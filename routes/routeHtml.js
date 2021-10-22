const router = require('express').Router();
const path = require('path');
const pubStatHtml = path.join(__dirname, '../public/index.html');

router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

router.get('/exercise', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/exercise.html'))
);

// router.get('/workout', (req, res) =>
//   res.sendFile(path.join(__dirname, '../public/exercise.html'))
// );

// router.get('/stats', (req, res) =>
//   res.sendFile(path.join(__dirname, '../public/stats.html'))
// );

router.get('/stats', (req, res) =>
  res.status(200).sendfile(pubStatHtml)
);
// I just thought this way of making an html route was neat


// '../public/stats.html'

module.exports = router;