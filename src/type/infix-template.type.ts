/**
 * @description Represents a template for constructing a string with an infix inserted between two stem halves.
 * @export
 * @template {string} StemStart The start part of the stem.
 * @template {string} Infix The infix to insert.
 * @template {string} StemEnd The end part of the stem.
 * @template {string} [Delimiter=''] The delimiter between infix and stem parts.
 */
export type InfixTemplate<
  StemStart extends string,
  Infix extends string,
  StemEnd extends string,
  Delimiter extends string = ''
> = `${StemStart}${Delimiter}${Infix}${Delimiter}${StemEnd}`;

// export type Inserted = InfixTemplate<'stem', 'in', 'em'>;      // "stinem"
// export type InsertedDash = InfixTemplate<'stem', 'in', 'em', '-'>; // "st-in-em"
