import Answer from "../entities/answer";
import { AnswerQuestionUseCase } from "./answer-question";
import { expect, test } from "vitest";

test("Create an answer question use case", () => {
  const answerQuestion = new AnswerQuestionUseCase();

  const answer = answerQuestion.handle({
    questionId: "questionId",
    instructorId: "instructorId",
    content: "content",
  });

  expect(answer).toBeInstanceOf(Answer);
  expect(answer.content).toBe("content");
});
