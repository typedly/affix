/**
 * @description Represents a template for constructing a prefixed string.
 * @export
 * @template {string} Stem The type of the stem.
 * @template {string} Suffix The type of the suffix.
 * @template {string} [Delimiter=''] The type of the delimiter.
 * @example
 * const example1 = SuffixTemplate<'stem', 'suffix'>; // results in "stemsuffix"
 * const example2 = SuffixTemplate<'stem', 'suffix', '-'>; // results in "stem-suffix"
 */
export type SuffixTemplate<
  Stem extends string,
  Suffix extends string,
  Delimiter extends string = '',
> = `${Stem}${Delimiter}${Suffix}`;
