import e from "express";
import { Schema } from "mongoose";
import mongoose from "mongoose";

// create a Question Model and Schema
const QuestionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: [
    {
      option: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        required: false,
      },
    },
  ],
});

// create a model from the schema
const Question = mongoose.model("Question", QuestionSchema);

export default Question;
