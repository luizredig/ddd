import { UniqueEntityID } from "src/core/entities/unique-entity-id";
import { Slug } from "./value-objects/slug";
import { Entity } from "src/core/entities/entity";

interface QuestionProps {
  title: string;
  content: string;
  slug: Slug;
  authorId: UniqueEntityID;
  bestAnswerId?: UniqueEntityID;
}

export class Question extends Entity<QuestionProps> {
  static create(props: QuestionProps, id?: UniqueEntityID): Question {
    const question = new Question(props, id);

    return question;
  }
}
