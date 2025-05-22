import Filter from "~/Api/Filter";

export default class Include {

  relation: string;
  limit: number | undefined;
  filters: Filter[] = [];

  public constructor(relation: string) {
    this.relation = relation
  }

  public setLimit(limit: number | undefined) {
    this.limit = limit
  }

  public addFilter(filter: Filter) : this {
    this.filters.push(filter);
    return this;
  }
}
