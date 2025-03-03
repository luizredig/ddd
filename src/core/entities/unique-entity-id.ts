import { randomUUID } from "node:crypto";

export class UniqueEntityID {
  private _value: string;

  toString(): string {
    return this._value;
  }

  toValue(): string {
    return this._value;
  }

  constructor(value?: string) {
    this._value = value ?? randomUUID();
  }
}
