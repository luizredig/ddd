import Answer from "../entities/answer";

interface AnswerQuestionUseCaseRequest {
  questionId: string;
  instructorId: string;
  content: string;
}

export class AnswerQuestionUseCase {
  handle({
    questionId,
    instructorId,
    content,
  }: AnswerQuestionUseCaseRequest): Answer {
    const answer = new Answer(content);

    return answer;
  }
}
