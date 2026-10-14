/** shape = closed fillable form, line = open stroke, cut = interior detail
 *  (stroked in outline styles, knocked out of fills in solid styles). */
export type Kind = 'shape' | 'line' | 'cut';
/** p = primary colour, s = secondary colour. */
export type Role = 'p' | 's';
export interface El {
    tag: 'path' | 'circle' | 'rect';
    a: Record<string, string | number>;
    /** Style roles. The free package ships geometry only (Stroke); @iconoven-pro/icons adds kind and role. */
    kind?: Kind;
    role?: Role;
    /** Which solid layer a cut removes (default p). */
    knock?: Role;
    /** Cut is a closed area: knocked out as a filled region, not just its stroke. */
    fillcut?: boolean;
    /** Stroke width at the 1.5 base; dots use 2. */
    sw?: number;
}
export interface IconMaster {
    name: string;
    category: string;
    tags: string[];
    aliases?: string[];
    since?: string;
    els: El[];
    /** Corner badge: base els are erased inside the circle (cx, cy, r), then els are drawn there. */
    badge?: {
        els: El[];
        cx: number;
        cy: number;
        r: number;
    };
    /** Base icon name of a generated badge variant. */
    variantOf?: string;
}
