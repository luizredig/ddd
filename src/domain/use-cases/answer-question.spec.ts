import Answer from '../entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'
import { AnswerQuestionUseCase } from './answer-question'

const fakeAnswersRepository: AnswersRepository = {
  createAnswer: async (answer: Answer) => {
    return answer
  },
}

test('Create an answer question use case', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.handle({
    questionId: 'questionId',
    instructorId: 'instructorId',
    content: 'content',
  })

  expect(answer.content).toEqual('content')
})
