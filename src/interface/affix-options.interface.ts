// Interface.
import { AffixSettings } from "./affix-settings.interface";
// Type.
import { BasicAffixKind } from "../type";
/**
 * @description The interface extends the `AffixConfiguration` interface and allows for partial configuration.
 * @export
 * @interface AffixOptions
 * @template {string | undefined} [Value=string] The type of the value property, defaults to `string`.
 * @template {number | undefined} [Length=number | undefined] The type of the length property, defaults to `number | undefined`.
 * @template {number | undefined} [Min=number | undefined] The type of the min property, defaults to `number | undefined`.
 * @template {number | undefined} [Max=number | undefined] The type of the max property, defaults to `number | undefined`.
 * @template {BasicAffixKind | undefined} [Kind=BasicAffixKind | undefined] The type of the kind property, defaults to `BasicAffixKind`.
 * @template {RegExp | string | undefined} [Pattern=RegExp | string | undefined] The type of the pattern property, defaults to `RegExp | string | undefined`.
 * @extends {Partial<AffixSettings<Value, Kind, Pattern>>}
 */
export interface AffixOptions<
  Value extends string | undefined = string,
  Kind extends BasicAffixKind | undefined = BasicAffixKind | undefined,
  Length extends number | undefined = number | undefined,
  Min extends number | undefined = number | undefined,
  Max extends number | undefined = number | undefined,
  Pattern extends RegExp | string | undefined = RegExp | string | undefined
> extends Partial<AffixSettings<
  Value,
  Kind,
  Length,
  Min,
  Max,
  Pattern
>> {}
