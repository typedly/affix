import { AffixConfiguration } from '../interface';

// Length and pattern exact value.
const affixConfiguration1: AffixConfiguration<'example', 7> = {
  value: 'example',
  length: 7,
  pattern: /^[a-zA-Z]+$/,
  timestamp: new Date(),
};

// Full configuration with length and pattern settings.
const affixConfiguration2: AffixConfiguration<'example', 7, 27, 34> = {
  value: 'example',
  length: {
    value: 27,
    min: 27,
    max: 34 
  },
  pattern: {
    regexp: /^[a-zA-Z]+$/,
    lowercase: true,
    uppercase: true,
    special: true,
  },
  timestamp: new Date(),
};
