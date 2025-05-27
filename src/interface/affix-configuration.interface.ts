// Interface.
import { AffixSettings } from "./affix-settings.interface";
/**
 * @description The interface defines the structure of an affix configuration object.
 * @export
 * @interface AffixConfiguration
 * @template {string} [Value=string] The type of the value property, defaults to `string`.
 * @template {number} [Length=number] The type of the length property, defaults to `number`.
 * @template {number} [Min=number] The type of the min property, defaults to `number`.
 * @template {number} [Max=number] The type of the max property, defaults to `number`.
 * @template {RegExp} [Pattern=RegExp] The type of the pattern property, defaults to `RegExp`.
 * @extends {AffixSettings<Value, Length, Min, Max, Pattern>}
 */
export interface AffixConfiguration<
  Value extends string = string,
  Length extends number = number,
  Min extends number = number,
  Max extends number = number,
  Pattern extends RegExp = RegExp
> extends AffixSettings<Value, Length, Min, Max, Pattern> {
  /**
   * @description Represents the timestamp of the affix configuration. Last saved or modified time.
   * @type {?Date}
   */
  timestamp?: Date;
};
