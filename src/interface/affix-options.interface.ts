// Interface.
import { AffixConfiguration } from "./affix-configuration.interface";
/**
 * @description The interface extends the `AffixConfiguration` interface and allows for partial configuration.
 * @export
 * @interface AffixOptions
 * @template {string} Value The type of the value property, defaults to `string`.
 */
export interface AffixOptions<Value extends string = string> extends Partial<AffixConfiguration<Value>> {}
