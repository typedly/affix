/**
 * @description The SuprasegmentalAffixKind type defines the various types of suprasegmental affixes that can be used in linguistics.
 * @export
 */
export type SuprasegmentalAffixKind =
  // Alters a suprasegmental feature such as tone or stress (e.g., stem̋)
  | 'superfix'

  // Appears below the line in written or phonological form (rare)
  | 'subfix'

  // "Changes a suprasegmental feature of a stem"
  // stem\suprafix
  | 'suprafix'

  // Hypothetical or rare: applied beneath the segment (mirror to suprafix)
  'subafix';
