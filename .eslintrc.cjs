// .eslintrc.cjs
module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "./tsconfig.json",
		tsconfigRootDir: __dirname,
		sourceType: "module",
	},
	env: {
		browser: true,
		es2021: true,
	},
	plugins: ["@typescript-eslint"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended"
	],
	ignorePatterns: [
		"node_modules/",
		"dist/",
		"main.js", // esbuild output
		"version-bump.mjs" // optional
	],
	rules: {
		// Use TS-ESLint's no-unused-vars instead of ESLint's
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": ["warn", {
			argsIgnorePattern: "^_",
			varsIgnorePattern: "^_"
		}],

		// Optional: Prettier-like rules (without requiring Prettier plugin)
		"semi": ["error", "always"],
		"quotes": ["error", "double", { "avoidEscape": true }],
		"comma-dangle": ["error", "always-multiline"],
	}
};
