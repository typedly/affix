// Interface.
import { LengthSetting, PatternSettings, ValueSetting } from '@typedly/settings';
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
 * @extends {ValueSetting<Value>}
 * @extends {LengthSetting<Length, Min, Max>}
 * @extends {PatternSettings<Pattern>}
 * @extends {Omit<PatternSettings<Pattern>, 'regexp'>}
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
}
