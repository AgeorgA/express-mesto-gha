const { PORT = 3000, MONGO_URL = 'mongodb://localhost:27017/mestodb' } = process.env;

const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const router = require('./router/index');
const { login, createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');

const app = express();

app.use(express.json());

app.post('/signin', login);
app.post('/signup', createUser);

app.use(router);
app.use(auth);
app.use(errors());

app.use((req, res) => {
  res.status(404).send({ message: 'Ошибка - 404 Страница не найдена' });
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? 'На сервере произошла ошибка' : message,
  });
  next();
});

async function init() {
  await mongoose.connect(MONGO_URL);
  console.log('DB CONNECT');

  await app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
}
init();
