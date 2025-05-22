export default class Filter {

  nested: Filter[] = [];

  public constructor(
      nested:  Filter[] = []
  ) {
    this.nested = nested;
  }

}
