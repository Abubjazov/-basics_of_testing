const asyncFunc = (callback, delay) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(callback())
		}, delay)
	})
}

module.exports = asyncFunc
