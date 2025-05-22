export default class Scope {

  name: string;
  parameters: [] = [];

  public constructor(name: string, parameters: []) {
    this.name = name;
    this.parameters = parameters;
  }

}
