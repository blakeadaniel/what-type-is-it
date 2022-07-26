export type ComparisonProps = {
    arg: any;
    comparison?: "type" | "instance";
  };
  
  const typeOfTypes = [
    "undefined",
    "object",
    "boolean",
    "number",
    "bigint",
    "string",
    "symbol",
    "function",
    null
  ];
  
  function IsNull(x) {
    return x === null;
  }
  
  function TypeComparison(arg) {
    let type;
    for (let i = 0; i <= typeOfTypes.length + 1; i++) {
      if (typeof arg === typeOfTypes[i]) {
        type = typeOfTypes[i];
      }
    }
    if (type === undefined) {
      return "Error: Unknown type";
    } else return type;
  }
  
  function InstanceComparison(arg) {
    let type;
    let error;
    if (arg instanceof String) {
      type = "string";
    }
    if (!(arg instanceof String) && TypeComparison(arg) === "string") {
      type = "Error: string primitive is not a String";
    }
    if (arg instanceof Date) {
      type = "date";
    }
    if (arg instanceof Object) {
      type = "object";
    }
    if (type === undefined) {
      type = "Error: Unknown type";
    }
    return !!error ? error : type;
  }
  
  export function WhichType({ arg, comparison = "type" }: ComparisonProps) {
    if (IsNull(arg)) {
      return "null";
    }
    if (comparison === "type") {
      return TypeComparison(arg);
    }
    if (comparison === "instance") {
      return InstanceComparison(arg);
    } else return "Error: Unknown type";
  }
  
  
  