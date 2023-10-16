const router = require('express').Router();

const userRoutes = require('./users');
const cardRoutes = require('./cards');

router.use('/users', userRoutes);
router.use('/cards', cardRoutes);
router.use((req, res) => {
  res.status(404).send({ message: 'Ошибка - 404 Страница не найдена' });
});

module.exports = router;
