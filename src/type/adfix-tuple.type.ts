/**
 * @description Represents a tuple of adfixes, consisting of a prefix and a suffix.
 * @export
 * @template {string} [Prefix=string] The type of the prefix.
 * @template {string} [Suffix=string] The type of the suffix.
 */
export type AdfixTuple<
  Prefix extends string = string,
  Suffix extends string = string
> = [prefix: Prefix, suffix: Suffix];
