export class Topic {
  private _id: string;
  private _name: string;
  private _imageLink: string;
  private _popularity: number;

  constructor(id: string, name: string, imageLink: string, popularity: number) {
    this._id = id;
    this._name = name;
    this._imageLink = imageLink;
    this._popularity = popularity;
  }

  /**
   * Getter id
   * @return {string}
   */
  public get id(): string {
    return this._id;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter imageLink
   * @return {string}
   */
  public get imageLink(): string {
    return this._imageLink;
  }

  /**
   * Getter popularity
   * @return {number}
   */
  public get popularity(): number {
    return this._popularity;
  }

  /**
   * Setter id
   * @param {string} value
   */
  public set id(value: string) {
    this._id = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter imageLink
   * @param {string} value
   */
  public set imageLink(value: string) {
    this._imageLink = value;
  }

  /**
   * Setter popularity
   * @param {number} value
   */
  public set popularity(value: number) {
    this._popularity = value;
  }
}
