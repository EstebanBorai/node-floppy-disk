import typescript from 'rollup-plugin-typescript';

export default {
	input: './main.ts',
	output: {
		file: 'dist/index.js',
		format: 'cjs'
	},
	plugins: [
		typescript()
	]
}
