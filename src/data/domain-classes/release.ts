import { Topic } from "./topic";

export class Release extends Topic {
  private _type: string;

  constructor(
    id: string,
    name: string,
    imageLink: string,
    popularity: number,
    type: string
  ) {
    super(id, name, imageLink, popularity);
    this._type = type;
  }

  /**
   * Getter type
   * @return {string}
   */
  public get type(): string {
    return this._type;
  }

  /**
   * Setter type
   * @param {string} value
   */
  public set type(value: string) {
    this._type = value;
  }
}
