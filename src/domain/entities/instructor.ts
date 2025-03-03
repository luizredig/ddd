import { Entity } from "src/core/entities/entity";
import { UniqueEntityID } from "src/core/entities/unique-entity-id";

interface InstructorProps {
  name: string;
}

export class Instructor extends Entity<InstructorProps> {
  get name(): string {
    return this.props.name;
  }

  static create(props: InstructorProps, id?: UniqueEntityID): Instructor {
    const instructor = new Instructor(props, id);

    return instructor;
  }
}
