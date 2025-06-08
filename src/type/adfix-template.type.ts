// Type.
import { PrefixTemplate } from "./prefix-template.type";
import { SuffixTemplate } from "./suffix-template.type";
/**
 * @description The type defines the basic structure of adfix template where the prefix, stem, and suffix are separated by a delimiter.
 * @export
 * @template {string} [Prefix=string] The prefix part of the adfix template.
 * @template {string} [Stem=string] The stem part of the adfix template.
 * @template {string} [Suffix=string] The suffix part of the adfix template.
 * @template {string} [PrefixDelimiter=''] The delimiter used to separate the prefix from the stem.
 * @template {string} [SuffixDelimiter=PrefixDelimiter] The delimiter used to separate the stem from the suffix.
 * @example
 * const example1: AdfixTemplate<'pre', 'fix', 'post'> = "prefixpost";
 * const example2: AdfixTemplate<'pre', 'fix', 'post', '-', '_'> = "pre-fix_post";
 */
export type AdfixTemplate<
  Prefix extends string = string,
  Stem extends string = string,
  Suffix extends string = string,
  PrefixDelimiter extends string = '',
  SuffixDelimiter extends string = PrefixDelimiter,
> = `${PrefixTemplate<Prefix, Stem, PrefixDelimiter>}${SuffixTemplate<'', Suffix, SuffixDelimiter>}`;
