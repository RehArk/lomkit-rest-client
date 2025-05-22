export default class NestedFilter {

  field: string;
  operator: string;
  value: string | null;
  type: string | null | undefined;

  public constructor(
    field: string,
    operator: string,
    value: string | null,
    type: string | null | undefined
  ) {
    this.field = field;
    this.operator = operator;
    this.value = value;
    this.type = type;
  }

}
