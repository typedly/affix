// Type.
import { BasicAffixKind } from "./basic-affix-kind.type";
import { HypotheticalAffixKind } from "./hypothetical-affix-kind.type";
import { SuprasegmentalAffixKind } from "./suprasegmental-affix-kind.type";
/**
 * @description The type defines the various types of affixes.
 * @export
 * @link https://en.wikipedia.org/wiki/Affix
 */
export type AffixKind =
  | BasicAffixKind
  | SuprasegmentalAffixKind
  | HypotheticalAffixKind

  // The elision of a portion of a stem
  // st⟩disfix⟨em
  | 'disfix'

  //	Incorporates a reduplicated portion of a stem
  // stem~duplifix
  | 'duplifix'

  // "A discontinuous affix that interleaves within a discontinuous stem"
  // s⟨transfix⟩te⟨transfix⟩m
  'transfix';