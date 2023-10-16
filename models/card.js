const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Поле name является обязательным'],
      minlength: [2, 'Минимальная длина 2 символа'],
      maxlength: [30, 'Максимальная длина 30 символов'],
    },

    link: {
      type: String,
      required: [true, 'Поле link является обязательным'],
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },

    likes: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
      ref: 'user',
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false, timestamps: true },
);

module.exports = mongoose.model('card', cardSchema);
