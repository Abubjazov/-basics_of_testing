const validateValue = require('./validateValue')

describe('Func: validateValue', () => {
	test('should validate correct value', () => {
		expect(validateValue(50)).toBe(true)
	})

	test('should validate lower limit value', () => {
		expect(validateValue(0)).toBe(true)
	})

	test('should validate upper limit value', () => {
		expect(validateValue(100)).toBe(true)
	})

	test('should validate lower uncorrect value', () => {
		expect(validateValue(-1)).toBe(false)
	})

	test('should validate upper uncorrect value', () => {
		expect(validateValue(101)).toBe(false)
	})
})
