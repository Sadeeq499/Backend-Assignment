import testCaste from "../Models/TestCase.js";

export const createTestCaseController = async (req, res, next) => {
  const { questionId } = req.params;
  const { input, output } = req.body;

  try {
    const test_case = new testCaste({
      questionId,
      input,
      output,
    });

    await test_case.save();

    res.status(201).json({
      message: "test case created successfully",
      success: true,
      data: test_case,
    });
  } catch (error) {
    next(error);
  }
};
