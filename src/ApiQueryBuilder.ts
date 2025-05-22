import Filter from "~/Api/Filter";
import Include from "~/Api/Include";
import Aggregate from "~/Api/Aggregate";
import Instruction from "~/Api/Instruction";
import NestedFilter from "~/Api/Filter";

export default abstract class ApiQueryBuilder {

  private filters: Filter[] = [];
  private nestedFilters: NestedFilter[] = [];
  private includes: Include[] = [];
  private aggregates: Aggregate[] = [];
  private instructions: Instruction[] = [];
  private scope: any[] = [];
  private gates: string[] = [];
  private sorts: { field: string, direction: 'asc' | 'desc' }[] = [];

  private page: number = 1;
  private limit: number = 32;

  public addFilter(filter: Filter) : this {
    this.filters.push(filter);
    return this;
  }

  public addNestedFilter(nestedFilter: NestedFilter) : this {
    this.nestedFilters.push(nestedFilter);
    return this;
  }

  public addAggregate(aggregate: Aggregate) {
    this.aggregates.push(aggregate);
    return this;
  }

  public addInstruction(instruction: Instruction) {
    this.instructions.push(instruction);
    return this;
  }

  public addInclude(include: Include) : this {
    this.includes.push(include);
    return this;
  }

  public setScope(scope: any[]) : this {
    this.scope = scope;
    return this;
  }

  public setGates(gates: string[] = []) : this {
    this.gates = gates;
    return this;
  }

  public addSort(field: string, direction: 'asc' | 'desc') : this {
    this.sorts.push({ field, direction });
    return this;
  }

  public setPage(page: number) : this {
    this.page = page;
    return this;
  }

  public setLimit(limit: number) : this {
    this.limit = limit;
    return this;
  }

  private buildFilter() {
    let filters = this.filters;
    for(let nestedFilter of this.nestedFilters) {
      filters.push(nestedFilter);
    }
    return filters;
  }

  public build() {
    return {
      filters: this.buildFilter(),
      instructions: this.instructions,
      aggregates: this.aggregates,
      includes: this.includes,
      scopes: this.scope,
      gates: this.gates,
      sorts: this.sorts,
      page: this.page,
      limit: this.limit
    };
  }
}
