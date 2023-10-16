const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateProfile,
  updateAvatar,
} = require('../controllers/users');

router.get('/users', getUsers); // вернуть всех пользователей
router.get('/users/:userId', getUserById); // вернуть конкретного пользователя
router.post('/users', createUser); // создать пользователя

router.patch('/users/me', updateProfile); // обновить профиль
router.patch('/users/me/avatar', updateAvatar); // обновить аватар

module.exports = router;
