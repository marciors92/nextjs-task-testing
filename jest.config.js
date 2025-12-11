const nextJest = require('next/jest');

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  // Configurações do ambiente de teste
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], 
  // Usa o nome do módulo instalado (jest-environment-jsdom)
  testEnvironment: 'jest-environment-jsdom', 
  
  // Caminhos que o Jest deve ignorar
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/app/'],
  
  // Mapeia os aliases de importação do TypeScript (@/)
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', 
  },

  // Transpilação de TypeScript e JavaScript para que o Jest entenda
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
};

// Cria o Jest Config, combinando o Next.js e as configurações personalizadas
module.exports = createJestConfig(customJestConfig);