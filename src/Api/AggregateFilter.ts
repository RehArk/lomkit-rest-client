export default class AggregateFilter {

  public field: string;
  public value: string;

  public constructor(
    field : string,
    value: string
  ) {
    this.field = field;
    this.value = value;
  }
}
