// Interface.
import { AffixSettings } from "./affix-settings.interface";
/**
 * @description The interface extends the `AffixConfiguration` interface and allows for partial configuration.
 * @export
 * @interface AffixOptions
 * @template {string} Value The type of the value property, defaults to `string`.
 */
export interface AffixOptions<
  Value extends string = string,
  Length extends number = number,
  Min extends number = number,
  Max extends number = number,
  Pattern extends RegExp = RegExp
> extends Partial<AffixSettings<Value, Length, Min, Max, Pattern>> {}
