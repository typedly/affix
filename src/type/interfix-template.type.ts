/**
 * @description Represents a template for constructing a string with an interfix inserted between two stems.
 * @export
 * @template {string} FirstStem The first stem.
 * @template {string} Interfix The interfix to insert.
 * @template {string} SecondStem The second stem.
 * @template {string} [Delimiter=''] The delimiter between stems.
 * @example
 * const example1 = InterfixTemplate<'arbeit', 's', 'zimmer'>; // results in "arbeitszimmer"
 * const example2 = InterfixTemplate<'work', '-', 'room'>; // results in "work-room"
 */
export type InterfixTemplate<
  FirstStem extends string,
  Interfix extends string,
  SecondStem extends string,
  Delimiter extends string = ''
> = `${FirstStem}${Delimiter}${Interfix}${Delimiter}${SecondStem}`;
