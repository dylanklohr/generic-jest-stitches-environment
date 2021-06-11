import * as Stitches from '@stitches/react';

const stitchesConfig = Stitches.createCss({
	prefix: 'foobar010',

	theme: {
		colors: {
			black: '#000',
			red: '#f00',
			green: '#0f0',
			blue: '#00f',
		},

		space: {
			base: '4px',
			1: '$base',
			2: 'calc($base * 2)',
			3: 'calc($base * 3)',
			4: 'calc($base * 4)',
			6: 'calc($base * 6)',
			8: 'calc($base * 8)',
			10: 'calc($base * 10)',
			12: 'calc($base * 12)',
			16: 'calc($base * 16)',
		},

		sizes: {
			base: '4px',
		},

		radii: {
			1: '4px'
		},

		shadows: {
			focus: '0 0 0 calc(0.75 * $sizes$base) blue',
		},

		fonts: {
			regular: 'sans-serif',
		},

		fontWeights: {
			regular: '400',
			semiBold: '500',
			bold: '700',
		},

		fontSizes: {
			s: '12px',
			m: '16px',
			l: '24px',
		},

		lineHeights: {
			s: '12px',
			m: '16px',
			l: '24px',
		},
	},

	media: {
		s: `(min-width: 600px)`,
		motion: '(prefers-reduced-motion: no-preference)',
	},
});


const {
	css,
	styled,
	global: stitchesGlobal,
	theme,
	keyframes,
	getCssString,
} = stitchesConfig;
export { css, styled, stitchesGlobal, theme, keyframes, getCssString };
export { Stitches };
