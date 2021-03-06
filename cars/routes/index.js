var express = require('express');
var router = express.Router();

/* Get home page  */
router.get('/', function(req, res, next) {
  res.render('index', { title: ' Добро пожаловать в мир автомобилей премиум класса ', picture:'images/g.jpg'});
});


/* Bmw  */
router.get('/bmw', function(req, res, next) {
  res.render ('carsviyshka', {title: 'Стремительно развивающаяся баварская компания по некоторым техническим аспектам не желает и близко подпускать к себе конкурентов.',
  picture: 'images/bmw.jpg', desc: 'Девиз компании — «Freude am Fahren», с нем. — «Удовольствие от вождения».'})
});

/* Mercedes-Benz  */
router.get('/Mercedes', function(req, res, next) {
  res.render ('carsviyshka', {title: 'Немецкий концерн безусловный лидер по количеству созданных модельных рядов. ',
  picture: 'images/mercedes.jpg', desc: 'Статусные дорогие модели представлены практически во всех известных категориях – от классических бизнес-седанов, до родстеров и брутальных внедорожников.'})
});

/* Hyundai  */
router.get('/hyundai', function(req, res, next) {
  res.render ('carsviyshka', {title: 'Марка Hyundai давно и прочно обосновалась в конкретном сегменте автомобильного рынка – концерну нет равных в сфере разработок экономных удобных автомобилей для семейного пользования.',
  picture: 'images/hyundai.jpg', desc: 'Ценовая планка у популярных легковушек корейского лидера нереально низкая, но их надежность, практичность, выносливость и силовой потенциал остаются на стабильно высоком уровне.'})
});

/* Toyota  */
router.get('/toyota', function(req, res, next) {
  res.render ('carsviyshka', {title: 'Корпорация Toyota долгие годы удерживает неоспоримое лидерство в сфере мирового автомобильного производства',
  picture: 'images/toyota.jpg', desc: 'Несмотря на относительную молодость, начав деятельность в 1937 году, ей удалось обойти признанных европейских конкурентов и распространить влияние на страны, находящиеся на всех 5 континентах.'})
});

/* Chevrolet  */
router.get('/chevrolet', function(req, res, next) {
  res.render ('carsviyshka', {title: 'До боли знакомые модели компании Chevrolet богато представлены в России.',
  picture: 'images/chevrolet.jpg', desc: 'С тех пор как марку передали во владение легендарной General Motors, ее подопечные приобрели больше смелости и динамизма. С конвейеров многочисленных предприятий сходят малолитражки Aveo, городские автомобили Spark, любимцы больших семей Orlando, легендарные Corvette с Camaro, внедорожники и даже электромобили с увеличенными скоростными возможностями.'})
});

/* Rangerover  */
router.get('/rangerover', function(req, res, next) {
  res.render ('carsviyshka', {title: 'Модельный ряд легендарной марки представлен комфортными, функциональными, универсальными внедорожниками, неразрывно связанными с путешествиями.',
  picture: 'images/rangerover.jpg', desc: 'Открывать для себя всю широту возможностей, выходить за грани обыденного, стремиться к неизведанному, преодолевать трудности, верить в свои силы и становится лучшей версией себя – вот, что значит истинно британский бренд Land Rover. '})
});








module.exports = router;
