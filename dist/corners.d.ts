import type { El } from './types.js';
/** Corner style. `rounded` is the master drawing; `sharp` squares off corner rounds at render time. */
export type Corners = 'rounded' | 'sharp';
/** Root presentation attributes for each corner style (stroke ends and joins). */
export declare const CORNER_ATTRS: Record<Corners, {
    'stroke-linecap': string;
    'stroke-linejoin': string;
    'stroke-miterlimit'?: number;
}>;
type P = [number, number];
type Seg = {
    c: 'M' | 'L';
    p: P;
} | {
    c: 'Q';
    q: P;
    p: P;
} | {
    c: 'C';
    c1: P;
    c2: P;
    p: P;
} | {
    c: 'A';
    rx: number;
    ry: number;
    rot: number;
    large: number;
    sweep: number;
    p: P;
} | {
    c: 'Z';
};
/** Parses a path into absolute M/L/Q/C/A/Z segments (H/V, S/T and relative forms expanded). */
export declare function parse(d: string): Seg[] | null;
/** Unit tangents at the start and end of a curve segment beginning at p0. */
export declare function tangents(p0: P, s: Seg): [P | null, P | null];
/** Sharp version of a path: corner rounds become straight corners, real curves stay. Returns d unchanged if nothing applies. */
export declare function sharpenPath(d: string): string;
/** Element with sharp corners: rect radius dropped, path corner rounds squared off. */
export declare function sharpenEl(e: El): El;
export {};
