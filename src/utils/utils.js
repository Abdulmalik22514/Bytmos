/**
 * Delay an action execution
 * @param {number} delay The number of seconds to sleep
 * @param {object|function|array|string|bool} params
 */
export const sleep = async (delay = 100, params = null) => {
	return await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(params)
		}, delay)
	})
}

/**
 * Generate a unique id for use with map as keys or any other purpose.
 * @param {number} length The length of the unique id
 * @returns string
 */
export const uniqueId = (length = 20) => {
	let result = ''
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	const charactersLength = characters.length
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength))
	}
	return result
}
