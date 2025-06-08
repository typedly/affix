import { AffixConfiguration } from '../interface';

// Length and pattern exact value.
const affixConfiguration1: AffixConfiguration<'example', 'circumfix', 27> = {
  value: 'example',
  kind: 'circumfix',
  length: 27,
  pattern: /^[a-zA-Z]+$/,
  timestamp: new Date(),
  digit: false,
  lowercase: true,
  uppercase: true,
  special: true,
  whitespace: false,
  numeric: false,
};

// Full configuration with length and pattern settings.
const affixConfiguration2: AffixConfiguration<'example', 'prefix', 27, 27, 34> = {
  value: 'example',
  kind: 'prefix',
  length: {
    value: 27,
    min: 27,
    max: 34 
  },
  pattern: /^[a-zA-Z]+$/,
  timestamp: new Date(),
  digit: false,
  lowercase: true,
  uppercase: true,
  special: true,
  whitespace: false,
  numeric: false,
};
