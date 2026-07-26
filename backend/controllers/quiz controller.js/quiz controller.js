const getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({
        message: "Quiz not found"
      });
    }

    const safeQuiz = {
      _id: quiz._id,
      title: quiz.title,
      courseId: quiz.courseId,

      questions: quiz.questions.map((question) => ({
        _id: question._id,
        text: question.text,
        options: question.options
      }))
    };

    res.status(200).json(safeQuiz);

  } catch (error) {
    res.status(500).json({
      message: "Error fetching quiz",
      error: error.message
    });
  }
};