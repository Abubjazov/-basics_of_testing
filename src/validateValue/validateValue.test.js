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

	test('should validate lower incorrect value', () => {
		expect(validateValue(-1)).toBe(false)
	})

	test('should validate upper incorrect value', () => {
		expect(validateValue(101)).toBe(false)
	})
})
