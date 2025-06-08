/**
 * @description Represents a template for constructing a prefixed string.
 * @export
 * @template {string} Prefix The type of the prefix.
 * @template {string} Stem The type of the stem.
 * @template {string} [Delimiter=''] The type of the delimiter.
 */
export type PrefixTemplate<
  Prefix extends string,
  Stem extends string,
  Delimiter extends string = '',
> = `${Prefix}${Delimiter}${Stem}`;
