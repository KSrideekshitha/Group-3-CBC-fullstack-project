import Quiz from "../models/Quiz.js";
import Result from "../models/Result.js";

export const createQuiz = async (req, res) => {
  try {
    const { title, course, questions } = req.body;

    const quiz = await Quiz.create({
      title,
      course,
      questions,
    });

    res.status(201).json({
      success: true,
      message: "Quiz Created Successfully",
      quiz,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find().populate("course", "title");

    res.status(200).json({
      success: true,
      count: quizzes.length,
      quizzes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id).populate(
      "course",
      "title"
    );

    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz Not Found",
      });
    }

    res.status(200).json({
      success: true,
      quiz,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const submitQuiz = async (req, res) => {
  try {
    const { quizId, answers } = req.body;

    const quiz = await Quiz.findById(quizId);

    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz Not Found",
      });
    }

    let score = 0;

    quiz.questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        score++;
      }
    });

    const result = await Result.create({
      user: req.user.id,
      quiz: quizId,
      score,
      totalQuestions: quiz.questions.length,
    });

    res.status(200).json({
      success: true,
      message: "Quiz Submitted Successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMyResults = async (req, res) => {
  try {
    const results = await Result.find({ user: req.user.id })
      .populate("quiz", "title");

    res.status(200).json({
      success: true,
      count: results.length,
      results,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};