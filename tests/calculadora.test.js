const calculadora = require("../models/calculadora.js");

test("somar 2 mais 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 5 mais 100 deveria retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("somar 'banana' mais 100 deveria retornar 'erro''", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});

test("dividir 2 por 2 deve ser 1", () => {
  const resultado = calculadora.dividir(2, 2);
  expect(resultado).toBe(1);
});

test("dividir qualquer número por 0, deve retornar erro", () => {
  const resultado = calculadora.dividir(2, 0);
  expect(resultado).toBe("Erro");
});
