import { AffixSettings } from '../interface';

const settings1: AffixSettings<'example', 'infix', 33, 27, 34, RegExp> = {
  value: 'example',
  kind: 'infix',
  length: {
    value: 33,
    min: 27,
    max: 34 
  },
  pattern: {
    regexp: /^[a-zA-Z]+$/,
    lowercase: true,
    uppercase: true,
    special: true,
  },
};
