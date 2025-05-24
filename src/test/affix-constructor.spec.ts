// Interface.
import { AffixConstructor } from "../interface";

// Define a base Affix class
class Affix<T extends string> {
  constructor(public value?: T, public pattern?: RegExp) {}
}

// Create a specific Prefix class extending Affix
class Prefix<T extends string> extends Affix<T> {
  constructor(value?: T, pattern?: RegExp) {
    super(value, pattern);
  }
}

// Use AffixConstructor to type a constructor for Prefix
type PrefixConstructor = AffixConstructor<string, Affix<string>, Prefix<string>>;

// Example usage:
function createAffix<C extends PrefixConstructor>(ctor: C, value: string, pattern?: RegExp) {
  return new ctor(value, pattern);
}

const myPrefix = createAffix(Prefix, "pre", /^[a-z]+$/);
console.log(myPrefix.value); // "pre"
console.log(myPrefix.pattern); // /^[a-z]+$/