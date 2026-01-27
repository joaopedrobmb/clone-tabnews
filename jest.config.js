const dotenv = require("dotenv");
dotenv.config({
  path: ".env.development",
});

const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "." });
const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
  testTimeout: 60000,
});

module.exports = jestConfig;

// provar através do código que o processo do jest ta rodando no ambiente test
// conseguir carregar no processo do jest epro database.js conseguir se conectar ao
