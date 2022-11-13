export function assertIsDefined(value, name = "value") {
  if (value === undefined || value === null) {
    throw new Error(`Expected ${name} to be defined`);
  }
}
