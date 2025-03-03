import Answer from '@/domain/forum/enterprise/entities/answer'

export interface AnswersRepository {
  createAnswer(answer: Answer): Promise<Answer>
}
