import { Entity } from 'src/core/entities/entity'
import { UniqueEntityID } from 'src/core/entities/unique-entity-id'

interface AnswerProps {
  content: string
  authorId: UniqueEntityID
  questionId: UniqueEntityID
}

export default class Answer extends Entity<AnswerProps> {
  get content(): string {
    return this.props.content
  }

  get authorId(): UniqueEntityID {
    return this.props.authorId
  }

  get questionId(): UniqueEntityID {
    return this.props.questionId
  }

  static create(props: AnswerProps, id?: UniqueEntityID): Answer {
    const answer = new Answer(props, id)

    return answer
  }
}
