var express = require('express');
var router = express.Router();

/* Get home page  */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'автомобиль ' });
});



/* Bmw  */
router.get('/bmw', function(req, res, next) {
  res.render ('carsviyshka', {title: 'bmw', picture: 'images/bmw.jpg', desc: 'automobile'})
});

/* Mercedes-Benz  */
router.get('/Mercedes', function(req, res, next) {
  res.render ('carsviyshka', {title: 'Mercedes', picture: 'images/mercedes.jpg', desc: 'automobile'})
});

/* Hyundai  */
router.get('/hyundai', function(req, res, next) {
  res.render ('carsviyshka', {title: 'hyundai', picture: 'images/hyundai.jpg', desc: 'automobile'})
});

/* Toyota  */
router.get('/toyota', function(req, res, next) {
  res.render ('carsviyshka', {title: 'toyota', picture: 'images/toyota.jpg', desc: 'automobile'})
});

/* Chevrolet  */
router.get('/chevrolet', function(req, res, next) {
  res.render ('carsviyshka', {title: 'chevrolet', picture: 'images/chevrolet.jpg', desc: 'automobile'})
});

/* Rangerover  */
router.get('/rangerover', function(req, res, next) {
  res.render ('carsviyshka', {title: 'rangerover', picture: 'images/rangerover.jpg', desc: 'automobile'})
});








module.exports = router;
