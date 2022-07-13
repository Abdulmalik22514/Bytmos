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
