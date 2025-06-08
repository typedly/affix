// Type.
import { AdfixTemplate } from "./adfix-template.type";
/**
 * @description Represents a template for constructing a string with circumfix inserted at the beginning and end of the stem.
 * @export
 * @template {string} CircumfixStart The circumfix of the stem.
 * @template {string} Stem The stem between the circumfix.
 * @template {string} [CircumfixEnd=CircumfixStart] The circumfix at the end of the stem, defaults to the same as `CircumfixStart`.
 * @template {string} [Delimiter=''] The delimiter between circumfix and stem.
 * @example
 * // CircumfixTemplate<'en', 'light'> results in "enlighten"
 * // CircumfixTemplate<'', 'stem', '', '-'> results in "-stem-"
 */
export type CircumfixTemplate<
  CircumfixStart extends string,
  Stem extends string,
  CircumfixEnd extends string = CircumfixStart,
  Delimiter extends string = ''
> = AdfixTemplate<CircumfixStart, Stem, CircumfixEnd, Delimiter>;
