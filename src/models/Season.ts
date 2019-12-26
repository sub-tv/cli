export class SeasonModel {
  private _name: string;
  private _link: string;

  constructor(seasonNumber: string, link: string) {
    this._name = seasonNumber;

    this._link = `https://www.tv-subs.com${link}`;
  }

  get name() {
    return `Season ${this._name}`;
  }
  get link() {
    return this._link;
  }
}