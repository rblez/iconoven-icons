/** Motion stylesheet. Classes: .ico-m-<motion> picks the motion, .ico-run plays it,
 *  .ico-loop repeats it. Replace uses .ico-swap > .ico-out / .ico-in. */
export declare const MOTION_CSS: string;
/** Adds MOTION_CSS to document.head once (no-op outside the browser). */
export declare function injectMotionCss(root?: Document | ShadowRoot | undefined): void;
/** Restarts a motion on an element that has .ico-m classes. */
export declare function replay(el: Element): void;
