
<a href="https://www.typescriptlang.org/">
  <img
    src="https://avatars.githubusercontent.com/u/189665258?s=400&u=712e292bae048947d1f7d2020d7d38875c40e63a&v=4"
    width="20%"
    title="@typedly/affix - A collection of TypeScript packages for precise, type-safe development."
  />
</a>

## typedly/affix

<!-- npm badge -->
[![npm version][typedly-npm-badge-svg]][typedly-npm-badge]
[![GitHub issues][typedly-badge-issues]][typedly-issues]
[![GitHub license][typedly-badge-license]][typedly-license]

**Version:** v2.3.0

A **TypeScript** type definitions package for affix.

## Table of contents

- [Installation](#installation)
- [Api](#api)
  - [Interface](#interface)
    - [`AffixConfiguration`](#affixconfiguration)
    - [`AffixConstructor`](#affixconstructor)
    - [`AffixOptions`](#affixoptions)
    - [`AffixSettings`](#affixsettings)
  - [Type](#type)
    - [`Adfix`](#adfix)
    - [`AdfixTemplate`](#adfixtemplate)
    - [`AdfixTuple`](#adfixtuple)
    - [`AffixKind`](#affixkind)
    - [`BasicAffixKind`](#basicaffixkind)
    - [`HypotheticalAffixKind`](#hypotheticalaffixkind)
    - [`SuprasegmentalAffixKind`](#suprasegmentalaffixkind)
- [Contributing](#contributing)
- [Support](#support)
- [Code of Conduct](#code-of-conduct)
- [Git](#git)
  - [Commit](#commit)
  - [Versioning](#versioning)
- [License](#license)

## Installation

```bash
npm install @typedly/affix --save-peer
```

## Api

```typescript
import {
  // Interface.
  AffixConfiguration,
  AffixConstructor,
  AffixOptions,
  AffixSettings,
  //Type.
  Adfix,
  AdfixTemplate,
  AdfixTuple,
  AffixKind,
  BasicAffixKind,
  HypotheticalAffixKind,
  SuprasegmentalAffixKind,
} from '@typedly/affix';
```

### Interface

#### `AffixConfiguration`

[`affix-configuration.interface.ts`](https://github.com/typedly/affix/blob/main/src/interface/affix-configuration.interface.ts)

```typescript
import { AffixConfiguration } from '@typedly/affix';

const prefixConfig: AffixConfiguration<'app'> = {
  value: 'app',
  pattern: /[^a-z]/g // Removes non-lowercase letters
};

// Length and pattern exact value.
const affixConfiguration1: AffixConfiguration<'example', 7> = {
  value: 'example',
  length: 7,
  pattern: /^[a-zA-Z]+$/,
  timestamp: new Date(),
};

// Full configuration with length and pattern settings.
const affixConfiguration2: AffixConfiguration<'example', 7, 27, 34> = {
  value: 'example',
  length: {
    value: 7,
    min: 27,
    max: 34 
  },
  pattern: {
    regexp: /^[a-zA-Z]+$/,
    lowercase: true,
    uppercase: true,
    special: true,
  },
  timestamp: new Date(),
};
```

#### `AffixConstructor`

[`affix-constructor.interface.ts`](https://github.com/typedly/affix/blob/main/src/interface/affix-constructor.interface.ts)

```typescript
import { AffixConstructor } from '@typedly/affix';

// Define a base Affix class
class Affix<T extends string> {
  constructor(public value?: T, public pattern?: RegExp) {}
}

// Create a specific Prefix class extending Affix
class Prefix<T extends string> extends Affix<T> {
  constructor(value?: T, pattern?: RegExp) {
    super(value, pattern);
  }
}

// Use AffixConstructor to type a constructor for Prefix
type PrefixConstructor = AffixConstructor<string, Affix<string>, Prefix<string>>;

// Example usage:
function createAffix<C extends PrefixConstructor>(ctor: C, value: string, pattern?: RegExp) {
  return new ctor(value, pattern);
}

const myPrefix = createAffix(Prefix, "pre", /^[a-z]+$/);
console.log(myPrefix.value); // "pre"
console.log(myPrefix.pattern); // /^[a-z]+$/
```

#### `AffixOptions`

[`affix-options.interface.ts`](https://github.com/typedly/affix/blob/main/src/interface/affix-options.interface.ts)

```typescript
import { AffixOptions } from '@typedly/affix';

const suffixOpts: AffixOptions<'item'> = {
  value: 'item'
  // pattern is optional
};
```

#### `AffixSettings`

[`affix-settings.interface.ts`](https://github.com/typedly/affix/blob/main/src/interface/affix-settings.interface.ts)

```typescript
import { AffixSettings } from '@typedly/affix';

const settings1: AffixSettings<'example', 7, 27, 10, RegExp> = {
  value: 'example',
  length: {
    value: 7,
    min: 10,
    max: 27 
  },
  pattern: {
    regexp: /^[a-zA-Z]+$/,
    lowercase: true,
    uppercase: true,
    special: true,
  },
};
```

### Type

#### `Adfix`

[`adfix-template.type.ts`](https://github.com/typedly/affix/blob/main/src/type/adfix.type.ts)

```typescript
import { Adfix } from '@typedly/affix';
```

#### `AdfixTemplate`

[`adfix-template.type.ts`](https://github.com/typedly/affix/blob/main/src/type/adfix-template.type.ts)

```typescript
import { AdfixTemplate } from '@typedly/affix';
```

#### `AdfixTuple`

[`adfix-tuple.type.ts`](https://github.com/typedly/affix/blob/main/src/type/adfix-tuple.type.ts)

```typescript
import { AdfixTuple } from '@typedly/affix';
```

#### `AffixKind`

[`affix-kind.type.ts`](https://github.com/typedly/affix/blob/main/src/type/affix-kind.type.ts)

```typescript
import { AffixKind } from '@typedly/affix';
```

#### `BasicAffixKind`

[`basic-affix-kind.type.ts`](https://github.com/typedly/affix/blob/main/src/type/basic-affix-kind.type.ts)

```typescript
import { BasicAffixKind } from '@typedly/affix';
```

#### `SuprasegmentalAffixKind`

[`suprasegmental-affix-kind.type.ts`](https://github.com/typedly/affix/blob/main/src/type/suprasegmental-affix-kind.type.ts)

```typescript
import { SuprasegmentalAffixKind } from '@typedly/affix';
```

#### `HypotheticalAffixKind`

[`hypothetical-affix-kind.type.ts`](https://github.com/typedly/affix/blob/main/src/type/hypothetical-affix-kind.type.ts)

```typescript
import { HypotheticalAffixKind } from '@typedly/affix';
```

## Contributing

Your contributions are valued! If you'd like to contribute, please feel free to submit a pull request. Help is always appreciated.

## Support

If you find this package useful and would like to support its and general development, you can contribute through one of the following payment methods. Your support helps maintain the packages and continue adding new.

Support via:

- [Stripe](https://donate.stripe.com/dR614hfDZcJE3wAcMM)
- [Revolut](https://checkout.revolut.com/pay/048b10a3-0e10-42c8-a917-e3e9cb4c8e29)

Thanks for your support!

## Code of Conduct

By participating in this project, you agree to follow **[Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)**.

## GIT

### Commit

- [AngularJS Git Commit Message Conventions][git-commit-angular]
- [Karma Git Commit Msg][git-commit-karma]
- [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © typedly ([license][typedly-license])

<!-- This package: typedly  -->
  <!-- GitHub: badges -->
  [typedly-badge-issues]: https://img.shields.io/github/issues/typedly/affix
  [typedly-badge-forks]: https://img.shields.io/github/forks/typedly/affix
  [typedly-badge-stars]: https://img.shields.io/github/stars/typedly/affix
  [typedly-badge-license]: https://img.shields.io/github/license/typedly/affix
  <!-- GitHub: badges links -->
  [typedly-issues]: https://github.com/typedly/affix/issues
  [typedly-forks]: https://github.com/typedly/affix/network
  [typedly-license]: https://github.com/typedly/affix/blob/master/LICENSE
  [typedly-stars]: https://github.com/typedly/affix/stargazers
<!-- This package -->

<!-- Package: typedly -->
  <!-- npm -->
  [typedly-npm-badge-svg]: https://badge.fury.io/js/@typedly%2Faffix.svg
  [typedly-npm-badge]: https://badge.fury.io/js/@typedly%2Faffix

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/
