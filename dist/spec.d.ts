export declare const GRID: {
    readonly size: 24;
    readonly padding: 2;
    readonly live: 20;
    readonly stroke: 1.5;
    readonly dot: 2;
    readonly gap: 1;
    readonly radius: {
        readonly container: readonly [2, 2.5];
        readonly small: 1;
    };
};
export declare const GRID_GUIDES: {
    readonly circle: {
        readonly cx: 12;
        readonly cy: 12;
        readonly r: 10;
    };
    readonly square: {
        readonly x: 3;
        readonly y: 3;
        readonly w: 18;
        readonly h: 18;
    };
    readonly portrait: {
        readonly x: 4;
        readonly y: 2;
        readonly w: 16;
        readonly h: 20;
    };
    readonly landscape: {
        readonly x: 2;
        readonly y: 4;
        readonly w: 20;
        readonly h: 16;
    };
};
export declare const STROKE_WIDTHS: readonly [1, 1.5, 2];
export type StrokeWidth = (typeof STROKE_WIDTHS)[number];
export declare const DEFAULT_COLORS: {
    readonly primary: '#0F766E';
    readonly secondary: '#16C0B4';
    readonly primaryTint: '#9FEDE4';
    readonly secondaryTint: '#CFEDEA';
};
export declare const VARIANTS: readonly [{
    readonly id: 'stroke';
    readonly label: 'Stroke';
    readonly mono: true;
    readonly summary: 'Clean outline and lines.';
}, {
    readonly id: 'tinted';
    readonly label: 'Tinted';
    readonly mono: false;
    readonly summary: 'Coloured outline with a very light transparent fill.';
}, {
    readonly id: 'gradient';
    readonly label: 'Gradient';
    readonly mono: false;
    readonly summary: 'Outline and light fill with a two-colour transition.';
}, {
    readonly id: 'duotone';
    readonly label: 'Duotone';
    readonly mono: false;
    readonly summary: 'Light and dark tones of one colour by part.';
}, {
    readonly id: 'twotone';
    readonly label: 'Twotone';
    readonly mono: false;
    readonly summary: 'Main and secondary parts in two colours with a light fill.';
}, {
    readonly id: 'solid';
    readonly label: 'Solid';
    readonly mono: true;
    readonly summary: 'Single-colour filled shape with detail cutouts.';
}, {
    readonly id: 'bulk';
    readonly label: 'Bulk';
    readonly mono: false;
    readonly summary: 'Main part light and transparent, accent parts dark.';
}, {
    readonly id: 'solid-twotone';
    readonly label: 'Solid Twotone';
    readonly mono: false;
    readonly summary: 'Filled, main and secondary parts in two colours.';
}, {
    readonly id: 'solid-gradient';
    readonly label: 'Solid Gradient';
    readonly mono: false;
    readonly summary: 'Filled shape with a two-colour gradient.';
}, {
    readonly id: 'line-duo';
    readonly label: 'Line Duo';
    readonly mono: false;
    readonly summary: 'Two-colour outline, no fill.';
}, {
    readonly id: 'hybrid';
    readonly label: 'Hybrid';
    readonly mono: false;
    readonly summary: 'Outline with selected parts fully filled.';
}, {
    readonly id: 'color-outline';
    readonly label: 'Color Outline';
    readonly mono: false;
    readonly summary: 'Coloured filled parts under a dark outline.';
}];
export type Variant = (typeof VARIANTS)[number]['id'];
export declare const MOTIONS: readonly [{
    readonly id: 'still';
    readonly label: 'Still';
    readonly summary: 'No motion.';
}, {
    readonly id: 'appear';
    readonly label: 'Appear';
    readonly summary: 'Fades and rises in.';
}, {
    readonly id: 'draw-on';
    readonly label: 'Draw on';
    readonly summary: 'Strokes draw in, fills follow.';
}, {
    readonly id: 'bounce';
    readonly label: 'Bounce';
    readonly summary: 'Jumps and settles.';
}, {
    readonly id: 'scale';
    readonly label: 'Scale';
    readonly summary: 'Grows briefly and returns.';
}, {
    readonly id: 'wiggle';
    readonly label: 'Wiggle';
    readonly summary: 'Rocks side to side.';
}, {
    readonly id: 'rotate';
    readonly label: 'Rotate';
    readonly summary: 'One full turn.';
}, {
    readonly id: 'breathe';
    readonly label: 'Breathe';
    readonly summary: 'Slow grow and fade.';
}, {
    readonly id: 'pulse';
    readonly label: 'Pulse';
    readonly summary: 'Opacity pulse.';
}, {
    readonly id: 'variable-color';
    readonly label: 'Variable colour';
    readonly summary: 'Primary colour shifts to secondary and back.';
}, {
    readonly id: 'replace';
    readonly label: 'Replace';
    readonly summary: 'Old parts undraw, new parts draw in.';
}, {
    readonly id: 'draw-off';
    readonly label: 'Draw off';
    readonly summary: 'Strokes undraw, fills fade.';
}, {
    readonly id: 'disappear';
    readonly label: 'Disappear';
    readonly summary: 'Fades and rises out.';
}];
export type Motion = (typeof MOTIONS)[number]['id'];
export declare const TRIGGERS: readonly ['mount', 'hover', 'click', 'in-view', 'loop'];
export type Trigger = (typeof TRIGGERS)[number];
