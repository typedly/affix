import {
  AffixOptions
} from "../interface";

import {
  AffixKind,
  AdfixTemplate,
  AdfixTuple,
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
const fullName: AdfixTemplate<'--', 'name', 'suffix', '-'> = '---name-suffix';

const tuple: AdfixTuple<'pre', 'suf'> = ['pre', 'suf'];

const basicKind: BasicAffixKind = 'prefix'; // or 'suffix' | 'infix' | 'circumfix'

const tone: SuprasegmentalAffixKind = 'suprafix';

const experimental: HypotheticalAffixKind = 'interafix';
