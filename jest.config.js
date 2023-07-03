const nextJest = require('next/jest')

const createJestConfig = nextJest({
    // use this option to enable/disable TypeScript support
    // tsConfig: './tsconfig.jest.json',
    // use this option to enable/disable eslint support
    // eslint: {
    //   dirs: ['pages', 'components', 'lib', 'test'],
    // },
    // Provide the path to your Next.js app file. to load next.config.js and .env files
    dir: './',
})

// Add any custom configs to be used by Jest below
const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        // Handle module aliases for Next.js
        "^@/app/(.*)$": "<rootDir>/src/app/$1",
        '^@/components/(.*)$': '<rootDir>/src/components/$1',
        "^@/store/(.*)$": "<rootDir>/src/store/$1",
        '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
        '^@/util/(.*)$': '<rootDir>/src/util/$1',   
    },
    testEnvironment: 'jest-enviroment-jsdom',
}

// Ensure next/jest can load the async Next.js config
module.exports = createJestConfig(customJestConfig)