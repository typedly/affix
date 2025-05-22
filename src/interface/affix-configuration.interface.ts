/**
 * @description The interface defines the structure of an affix configuration object.
 * @export
 * @interface AffixConfiguration
 * @template {string} [Value=string] The type of the value property, defaults to `string`.
 */
export interface AffixConfiguration<Value extends string = string> {
  value: Value;
  pattern: RegExp;
};
