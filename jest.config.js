module.exports = {
  roots: [
    '<rootDir>/spec'
  ],
  testMatch: [
    '**/spec/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec).+(ts|tsx|js)'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
}
