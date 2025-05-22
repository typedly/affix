/**
 * @description Represents a tuple of affixes, consisting of a prefix and a suffix.
 * @export
 * @template {string} [Prefix=string] 
 * @template {string} [Suffix=string] 
 */
export type AffixTuple<
  Prefix extends string = string,
  Suffix extends string = string
> = [prefix: Prefix, suffix: Suffix];
