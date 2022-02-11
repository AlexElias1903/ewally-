import { codigoDeBarras } from "../utils/codigoDeBarras"
import { dataVencimento } from "../utils/dataVencimento"
import { valorBoleto } from "../utils/valorBoleto"
import { verificaTipoBoleto } from "../utils/verificaTipoBoleto"

const { calculaDV } = require('../utils/calculaDV')

test('Calculo digito verificador titulos bancarios', () => {
  expect(calculaDV("21299758700000020000001121100012100447561740","titulos_bancarios")).toBe(9)
})

test('Calculo digito verificador pagamento concesserionaria retorno', () => {
  expect(calculaDV("82610000002545907980000100008712247202110805","pagamento_concesserionaria")).toBe(1)
})

test('retorna codigo de barra pagamento concesserionaria', () => {
  expect(codigoDeBarras("826100000023545907980001010000871227472021108056","pagamento_concesserionaria")).toBe('82610000002545907980000100008712247202110805')
})

test('retorna codigo de barra titulos bancarios', () => {
  expect(codigoDeBarras("21290001192110001210904475617405975870000002000","titulos_bancarios")).toBe('21299758700000020000001121100012100447561740')
})

test('retorna data vencimento titulos bancarios', () => {
  expect(dataVencimento("21299758700000020000001121100012100447561740","titulos_bancarios")).toBe('2018-07-16')
})

test('retorna data vencimento titulos bancarios', () => {
  expect(dataVencimento("82610000002545907980000100008712247202110805","pagamento_concesserionaria")).toBe('')
})

test('retorna valor da parcela titulos bancarios', () => {
  expect(valorBoleto("21299758700000020000001121100012100447561740","titulos_bancarios")).toBe('20.00')
})

test('retorna valor da parcela pagamento concesserionaria', () => {
  expect(valorBoleto("82610000002545907980000100008712247202110805","pagamento_concesserionaria")).toBe('254.59')
})

test('retorna tipo do boleto', () => {
  expect(verificaTipoBoleto("826100000023545907980001010000871227472021108056")).toBe('pagamento_concesserionaria')
})

test('retorna tipo do boleto', () => {
  expect(verificaTipoBoleto("21290001192110001210904475617405975870000002000")).toBe('titulos_bancarios')
})