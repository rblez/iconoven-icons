# @iconoven/icons

IconOven Icons: 85,000+ icons across 13 styles. This package holds the icon data for the free Stroke style (round and sharp corners) and the renderer that turns an icon into SVG.

## Install

```sh
npm install @iconoven/icons
```

## Usage

```ts
import { renderSvg } from '@iconoven/icons'
import { home } from '@iconoven/icons/icons'

document.body.innerHTML = renderSvg(home, { strokeWidth: 1.5 })
```

Using a framework? Install its package instead, which uses this one: `@iconoven/react`, `@iconoven/vue`, `@iconoven/svelte`, `@iconoven/solid`, `@iconoven/preact`, `@iconoven/angular`, `@iconoven/react-native` or `@iconoven/web-component`.

## Entries

- `@iconoven/icons`: the renderer (`renderSvg`, `renderBody`) and types.
- `@iconoven/icons/icons`: every icon as a named export in camel case (`creditCard`). Import only what you use.
- `@iconoven/icons/all`: a map of every icon by name. It loads them all.

## Free and Pro

- **Stroke** is free under the MIT licence.
- The other 12 styles are **IconOven Pro**. They need the data in `@iconoven-pro/icons`, which has the same export names. Asking the free data for a Pro style draws Stroke and logs one warning.

## Documentation

Docs, the full icon list and licences: https://iconoven.com/docs/icons

## Licence

MIT. Pro styles follow the IconOven Pro licence: https://iconoven.com/icons/pro
