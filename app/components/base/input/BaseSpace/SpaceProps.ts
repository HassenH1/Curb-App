/**
 * @typedef       {Object}                SpaceProps
 *
 * @property      {boolean}               xxs         -   Set xxs size                        @see {@link GUTTER.XX_SMALL}
 * @property      {boolean}               xs          -   Set xs size                         @see {@link GUTTER.X_SMALL}
 * @property      {boolean}               sm          -   Set small size                      @see {@link GUTTER.SMALL}
 * @property      {boolean}               md          -   Set medium size (default)           @see {@link GUTTER.BASE}
 * @property      {boolean}               lg          -   Set large size                      @see {@link GUTTER.LARGE}
 * @property      {boolean}               xl          -   Set xl size                         @see {@link GUTTER.X_LARGE}
 * @property      {boolean}               xxl         -   Set xxl size                        @see {@link GUTTER.X_LARGE}
 * @property      {boolean}               double      -   Set double size                     @see {@link GUTTER.DOUBLE}
 * @property      {boolean}               max         -   Set max size                        @see {@link GUTTER.MAX}
 * @property      {boolean}               flex        -   Adds a flex:1 style to this view
 */

/**
 * @type {SpaceProps}
 */

export type SpaceProps = {
  xxs?: boolean;
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  xxl?: boolean;
  double?: boolean;
  max?: boolean;
  flex?: boolean;
};
