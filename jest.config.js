
module.exports = {
	collectCoverage: true,
	moduleFileExtensions: ['ts', 'tsx', 'js'],
	coverageReporters: ['json', 'lcov', 'text-summary'],
	rootDir: './',
	roots: ['<rootDir>/src'],
	clearMocks: true,
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(j|t)sx?$': 'ts-jest',
	},
};
