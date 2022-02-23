const asyncFunc = require('./asyncFunc')

describe('Func: asyncFunc', () => {
	test('should asyncFunc with correct values', async () => {
		const sum = await asyncFunc(() => 5 + 8, 3000)

		expect(sum).toBe(13)
	})
})
