// Interface.
import { ValueSetting } from '@typedly/settings';
import { LengthSetting } from '@typedly/length';
import { PatternSettings } from '@typedly/pattern';
// Type.
import { BasicAffixKind } from '../type';
/**
 * @description The interface defines the structure of an affix settings object.
 * @export
 * @interface AffixSettings
 * @template {string | undefined} [Value=string | undefined] The type of value of generic type `Value`.
 * @template {BasicAffixKind | undefined} [Kind=BasicAffixKind | undefined] The type of kind of generic type `Kind`.
 * @template {number | undefined} [Length=number | undefined] The type of length of generic type `Length`.
 * @template {number | undefined} [Min=number | undefined] The type of min of generic type `Min`.
 * @template {number | undefined} [Max=number | undefined] The type of max of generic type `Max`.
 * @template {RegExp | string | undefined} [Pattern=RegExp | string | undefined] The type of pattern of generic type `Pattern`.
 * @extends {ValueSetting<Value>} The value setting interface for the affix settings.
 * @extends {LengthSetting<Length, Min, Max>} The length setting interface for the affix settings.
 * @extends {Omit<PatternSettings<Pattern>, 'regexp'>} The omitted pattern settings interface for the affix settings.
 * @example
 * const example1: AffixSettings = {
 *  value: 'example',
 *  kind: 'prefix',
 *  length: { value: 7, min: 3, max: 10 },
 *  digit: true,
 *  pattern: /^[a-z0-9]+$/,
 *  lowercase: true,
 *  uppercase: false,
 *  special: false,
 *  whitespace: false,
 *  numeric: false,
 * };
 */
export interface AffixSettings<
  Value extends string | undefined = string | undefined,
  Kind extends BasicAffixKind | undefined = BasicAffixKind | undefined,
  Length extends number | undefined = number | undefined,
  Min extends number | undefined = number | undefined,
  Max extends number | undefined = number | undefined,
  Pattern extends RegExp | string | undefined = RegExp | string | undefined
> extends
  ValueSetting<Value>,
  LengthSetting<Length, Min, Max>,
  Omit<PatternSettings<Pattern>, 'regexp'> {
    digit: boolean | undefined;
    kind: Kind;
    pattern: Pattern;
    whitespace: boolean | undefined;
}
