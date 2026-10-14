# Changelog

## 1.0.1

Adds a README and the `homepage` link. No code changes.

## 1.0.0 (unreleased)

The new IconOven library. This is a major release because many icon names changed.

### Added
- Every IconOven icon in the Stroke style, with round and sharp corners, free under MIT.
- A renderer (`renderSvg`, `renderBody`) for 12 styles and 13 motions. This package's icon data draws Stroke only; the other 11 styles need the data in `@iconoven-pro/icons` (IconOven Pro), which has the same export names. Asking free data for a Pro style draws Stroke and logs one warning.
- Camel-case data exports from `@iconoven/icons/icons` (`creditCard`) and a name-keyed map from `@iconoven/icons/all`.

### Changed
- An icon name can now point at a different drawing; the full old → new list is in [`RENAMED.json`](./RENAMED.json).
  - `renamed` has 2,571 entries in the form `{ OldExport: NewExport }`.
  - Each old name still imports as a deprecated alias of its new icon, so `import { AccessibilityCheck } from "@iconoven/icons"` keeps working. Your editor will flag these imports as deprecated.
  - The deprecated aliases will be removed in 2.0.0.
- 0.1.x PascalCase imports from the package root still work (`import { Wallet } from "@iconoven/icons"`), and so does `<Icon icon={Wallet} />` from `@iconoven/react`.

### Removed
- 2,670 old names have no matching icon in the new set. `RENAMED.json` lists them under `removed`. Importing one of them now fails at build time. The site redirects their pages to the category page.
