import InstructionFilter from "~/Api/InstructionFilter";

export default class Instruction {

  name: string;
  fields: InstructionFilter[];

  public constructor(
    name: string,
    fields: InstructionFilter[] = [],
  ) {
    this.name = name;
    this.fields = fields;
  }

}
