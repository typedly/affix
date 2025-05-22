/**
 * @description The type defines the basic structure of adfix template where the prefix, stem, and suffix are separated by a delimiter.
 * @export
 * @template {string} Prefix The prefix part of the adfix template.
 * @template {string} Stem The stem part of the adfix template.
 * @template {string} Suffix The suffix part of the adfix template.
 * @template {string} Delimiter The delimiter used to separate the prefix, stem, and suffix.
 */
export type AdfixTemplate<
  Prefix extends string = string,
  Stem extends string = string,
  Suffix extends string = string,
  Delimiter extends string = string
> = `${Prefix}${Delimiter}${Stem}${Delimiter}${Suffix}`;
