import {
  AffixOptions
} from "../interface";

import {
  AffixKind,
  AffixTemplate,
  AffixTuple,
  BasicAffixKind,
  HypotheticalAffixKind,
  SuprasegmentalAffixKind
} from "../type";

const suffixOpts: AffixOptions<'item'> = {
  value: 'item'
  // pattern is optional
};


const kind: AffixKind = 'circumfix';

// e.g., '--name-suffix'
const fullName: AffixTemplate<'--', 'name', 'suffix', '-'> = '---name-suffix';

const tuple: AffixTuple<'pre', 'suf'> = ['pre', 'suf'];

const basicKind: BasicAffixKind = 'prefix'; // or 'suffix' | 'infix' | 'circumfix'

const tone: SuprasegmentalAffixKind = 'suprafix';

const experimental: HypotheticalAffixKind = 'interafix';
