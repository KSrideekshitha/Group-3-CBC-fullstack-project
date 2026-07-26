const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },

  options: {
    type: [String],
    required: true
  },

  correctIndex: {
    type: Number,
    required: true
  }
});

const quizSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true
    },

    title: {
      type: String,
      required: true
    },

    questions: [questionSchema]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Quiz", quizSchema);