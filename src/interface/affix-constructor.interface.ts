/**
 * @description The interface defines the structure of an affix constructor.
 * @export
 * @template {string} AffixValue The type of the affix value, defaults to `string`.
 * @template AffixType The type of the affix, which is a class or interface that extends `AffixInstance`.
 * @template {AffixType} AffixInstance The type of the affix instance, which is an instance of `AffixType`.
 */
export type AffixConstructor<
  AffixValue extends string,
  AffixType,
  AffixInstance extends AffixType
> = new (value?: AffixValue, pattern?: RegExp, ...args: any[]) => AffixInstance;
