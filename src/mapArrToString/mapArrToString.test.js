const mapArrToString = require('./mapArrToString')

describe('Func: mapArrToString', () => {
	test('should map to string correct array', () => {
		expect(mapArrToString([1, 2, 3, 4])).toEqual(['1', '2', '3', '4'])
	})

	test('should map to string incorrect array', () => {
		expect(mapArrToString([1, 2, 3, null, undefined, 'asdf'])).toEqual(['1', '2', '3'])
	})

	test('should map to string empty array', () => {
		expect(mapArrToString([])).toEqual([])
	})

	test('should map to string: with not', () => {
		expect(mapArrToString([1, 2, 3, 4])).not.toEqual([1, 2, 3, 4])
	})
})
