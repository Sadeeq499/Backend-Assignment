import Question from "../Models/QuestionsModel.js";

// Add a new question
export const createQuestionController = async (req, res, next) => {
  const { question, answer } = req.body;
  //  add a new question
  const newQuestion = new Question({
    question,
    answer,
  });
  try {
    const question = await newQuestion.save();
    res.status(201).json(question);
  } catch (error) {
    next(error);
  }
};

// Update a question
export const UpdateQuestionController = async (req, res, next) => {
  const { id } = req.params;
  const { question, answer } = req.body;

  try {
    const updateQuestion = await Question.findById(id);
    if (updateQuestion) {
      updateQuestion.question = question || updateQuestion.question;
      updateQuestion.answer = answer || updateQuestion.answer;
      const updatedQuestion = await updateQuestion.save();
      res.json({
        message: "Question updated successfully",
        updatedQuestion,
      });
    } else {
      res.status(404);
      throw new Error("Question not found");
    }
  } catch (error) {
    next(error);
  }
};

// Delete a question
export const deleteQuestionController = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deleteQuestion = await Question.findByIdAndDelete(id);
    res.json({
      message: "Question deleted successfully",
    });
    if (!deleteQuestion) {
      res.status(404);
      throw new Error("Question not found");
    }
  } catch (error) {
    next(error);
  }
};

// Get all questions
export const getAllQuestionsController = async (req, res, next) => {
  try {
    const questions = await Question.find({});
    res.json(questions);
  } catch (error) {
    next(error);
  }
};
