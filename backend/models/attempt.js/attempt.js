const mongoose = require("mongoose");

const attemptSchema = new mongoose.Schema(
  {
    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
      required: true
    },

    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    score: {
      type: Number,
      required: true
    },

    total: {
      type: Number,
      required: true
    },

    answers: {
      type: [Number],
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Attempt", attemptSchema);