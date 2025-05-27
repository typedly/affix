// Interface.
import { Settings } from '@typedly/settings';
/**
 * @description The interface defines the structure of an affix settings object.
 * @export
 * @interface AffixSettings
 * @template {string} [Value=string] The type of value of generic type `Value`.
 * @template {number} [Length=number] The type of length of generic type `Length`.
 * @template {number} [Min=number] The type of min of generic type `Min`.
 * @template {number} [Max=number] The type of max of generic type `Max`.
 * @template {RegExp} [Pattern=RegExp] The type of pattern of generic type `Pattern`.
 * @extends {Settings<Value, Length, Min, Max, Pattern>}
 */
export interface AffixSettings<
  Value extends string = string,
  Length extends number = number,
  Min extends number = number,
  Max extends number = number,
  Pattern extends RegExp = RegExp
> extends Settings<Value, Length, Min, Max, Pattern> {}
