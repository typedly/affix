/**
 * @description The type defines the basic structure of affix templates.
 * @export
 * @template {string} Prefix 
 * @template {string} Stem 
 * @template {string} Suffix 
 * @template {string} Delimiter 
 */
export type AffixTemplate<
  Prefix extends string,
  Stem extends string,
  Suffix extends string,
  Delimiter extends string
> = `${Prefix}${Delimiter}${Stem}${Delimiter}${Suffix}`;
