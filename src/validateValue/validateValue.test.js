const validateValue = require('./validateValue')


test('should validate', () => {
	expect(validateValue(50)).toBe(true)
})
