import AggregateFilter from "~/Api/AggregateFilter";

export default class Aggregate {

  public relation: string;
  public type: string;
  public field: string;
  public alias: string;
  public filters: AggregateFilter[];

  public constructor(
    relation: string,
    type: string,
    field: string,
    alias: string,
    filters: AggregateFilter[] = []
  ) {
    this.relation = relation;
    this.type = type;
    this.field = field;
    this.alias = alias;
    this.filters = filters;
  }
}
