/**
 * @description The BasicAffixKind type defines the basic types of affixes.
 * @export
 */
export type BasicAffixKind = 
  // "Appears before the stem"
  // 	prefix-stem
  | 'prefix'

  // "Appears after the stem"
  // stem-suffix
  | 'suffix'

  // "Appears within a stem — common e.g. in Austronesian languages like Tagalog"
  // st⟨infix⟩em
  | 'infix'

  // "Appears before and after the stem"
  | 'circumfix'

  // "Links two stems together in a compound"
  // stema-interfix-stemb
  'interfix';

