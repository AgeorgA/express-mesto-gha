const router = require('express').Router();
const {
  getUsers,
  getUserById,
  getCurrentUser,
  updateProfile,
  updateAvatar,
} = require('../controllers/users');

router.get('/', getUsers); // вернуть всех пользователей
router.get('/:userId', getUserById); // вернуть конкретного пользователя
router.post('/me', getCurrentUser);

router.patch('/me', updateProfile); // обновить профиль
router.patch('/me/avatar', updateAvatar); // обновить аватар

module.exports = router;
