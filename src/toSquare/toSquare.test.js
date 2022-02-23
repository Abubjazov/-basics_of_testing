const toSquare = require('./toSquare')

describe('Func: toSquare', () => {
	test('should square correct value', () => {
		expect(toSquare(3)).toEqual(9)
	})

	test('should square incorrect value', () => {
		expect(toSquare('a')).toEqual(NaN)
	})

	test('should square: over cases', () => {
		expect(toSquare(2)).toBe(4)
		expect(toSquare(2)).toBeLessThan(5)
		expect(toSquare(2)).toBeGreaterThan(3)
		expect(toSquare(2)).not.toBeUndefined()
	})
})
