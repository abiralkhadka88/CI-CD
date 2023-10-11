const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Nimble-ICE' })
})

/* GET ice-flakes resource */
router.get('/ice-flakes', function (req, res, next) {
  res
    .status(201)
    .json({
      resource: 'ice-flakes',
      count: 1005,
      shape: 'rectangle'
    })
})

router.get("/ice-cream", function (req, res, next) {
  res.status(201).json({
    resource: "ice-cream",
    count: 2000,
    shape: "cone",
  });
});

module.exports = router
