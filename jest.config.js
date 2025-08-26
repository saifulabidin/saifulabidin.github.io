/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  testTimeout: 120000,
  modulePathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/.next/standalone/'],
}
