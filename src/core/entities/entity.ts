import { UniqueEntityID } from "./unique-entity-id";

export class Entity<Props> {
  private _id: UniqueEntityID;
  protected props: Props;
  protected _isActive: boolean = true;
  protected createdAt: Date;
  protected updatedAt?: Date;

  get id(): UniqueEntityID {
    return this._id;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  get createdAtDate(): Date {
    return this.createdAt;
  }

  get updatedAtDate(): Date | undefined {
    return this.updatedAt;
  }

  protected touch(): void {
    this.updatedAt = new Date();
  }

  protected constructor(props: Props, id?: UniqueEntityID) {
    this.props = props;
    this._id = id ?? new UniqueEntityID();
    this.createdAt = new Date();
  }
}
