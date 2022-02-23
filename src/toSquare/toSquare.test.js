const toSquare = require('./toSquare')

describe('Func: toSquare', () => {
	test('should square correct value', () => {
		const spyMathPow = jest.spyOn(Math, 'pow')
		toSquare(2)
		expect(spyMathPow).toBeCalledTimes(1)
	})

	test('should square value = 1', () => {
		const spyMathPow = jest.spyOn(Math, 'pow')
		toSquare(1)
		expect(spyMathPow).toBeCalledTimes(0)
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

	afterEach(() => {
		jest.clearAllMocks()
	})
})
