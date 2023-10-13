const router = require('express').Router();
const { getCards, createCard, deleteCard, likeCard, dislikeCard } = require('../controllers/cards');

router.get('/cards', getCards); // возвращает все карточки
router.post('/cards', createCard); // создать карочку
router.delete('/cards/:cardId', deleteCard); //удалить карточку

router.put('/cards/:cardId/likes', likeCard); //like
router.delete('/cards/:cardId/likes', dislikeCard); //unlike

module.exports = router;
