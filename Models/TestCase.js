import { Schema } from "mongoose";
import mongoose from "mongoose";

const testCaseSchema = new Schema({
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },
  input: {
    type: String,
    required: true,
  },
  output: {
    type: String,
    required: true,
  },
});

const TestCase = mongoose.model("TestCase", testCaseSchema);

export default TestCase;
