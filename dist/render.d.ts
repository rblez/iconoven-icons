import type { El, IconMaster } from './types.js';
import { type Variant } from './spec.js';
import { type Corners } from './corners.js';
export interface RenderOptions {
    variant?: Variant;
    /** Unique prefix for mask/gradient ids; must differ per instance on a page. */
    id?: string;
    /** 1 | 1.5 | 2. Dots and other widths scale with it. */
    strokeWidth?: number;
    /** Adds pathLength and ico-d / ico-f hooks used by draw and replace motions. */
    motion?: boolean;
    /** rounded (default) | sharp: square corners, miter joins, square caps. */
    corners?: Corners;
}
/** Renders the inner SVG markup of an icon in one of the 12 variants. */
export declare function renderBody(icon: IconMaster | El[], opts?: RenderOptions): string;
export declare const SVG_ATTRS: {
    readonly xmlns: 'http://www.w3.org/2000/svg';
    readonly viewBox: '0 0 24 24';
    readonly fill: 'none';
    readonly 'stroke-linecap': 'round';
    readonly 'stroke-linejoin': 'round';
};
/** Full standalone SVG string. */
export declare function renderSvg(icon: IconMaster, opts?: RenderOptions & {
    size?: number;
    title?: string;
}): string;
