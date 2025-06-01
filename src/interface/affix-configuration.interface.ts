// Interface.
import { AffixSettings } from "./affix-settings.interface";
// Type.
import { BasicAffixKind } from "../type";
/**
 * @description The interface defines the structure of an affix configuration object.
 * @export
 * @interface AffixConfiguration
 * @template {string | undefined} [Value=string | undefined] The type of the value property, defaults to `string | undefined`.
 * @template {BasicAffixKind | undefined} [Kind=BasicAffixKind | undefined] The type of the kind property, defaults to `BasicAffixKind | undefined`.
 * @template {number | undefined} [Length=number | undefined] The type of length of generic type `Length`.
 * @template {number | undefined} [Min=number | undefined] The type of min of generic type `Min`.
 * @template {number | undefined} [Max=number | undefined] The type of max of generic type `Max`.
 * @template {RegExp | string | undefined} [Pattern=RegExp | string | undefined] The type of the pattern property, defaults to `RegExp | string | undefined`.
 * @extends {AffixSettings<Value, Kind, Length, Min, Max, Pattern>}
 */
export interface AffixConfiguration<
  Value extends string | undefined = string | undefined,
  Kind extends BasicAffixKind | undefined = BasicAffixKind | undefined,
  Length extends number | undefined = number | undefined,
  Min extends number | undefined = number | undefined,
  Max extends number | undefined = number | undefined,
  Pattern extends RegExp | string | undefined = RegExp | string | undefined
> extends AffixSettings<Value, Kind, Length, Min, Max, Pattern> {
  /**
   * @description Represents the timestamp of the affix configuration. Last saved or modified time.
   * @type {?Date}
   */
  timestamp?: Date;
};
