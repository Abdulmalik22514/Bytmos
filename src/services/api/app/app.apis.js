import {GET, PUT, POST, DELETE, Client} from '../../../configs/api'
import {handleError} from '../../../utils/handleErrors'
import {useAuthApis} from '../Auth/auth.index'
import {Appendpoints} from './app.endpoints'

export const CheckUserStatus = async () => {
	try {
		return await POST(Appendpoints.CHECK_ACCOUNT_STATUS)
			.then(res => {
				if (!res?.status) {
					handleError(res)
				}

				return res
			})
			.catch(res => console.error(res))
	} catch (error) {
		console.warn(`ASRE_ERROR:\n ${error}`)
	}
}

export const FetchActivityPerformance = async () => {
	try {
		return await GET(Appendpoints?.ACTIVITY_PERFORMACE)
			.then(res => {
				if (!res?.status) {
					// handleError(res)
				}

				return res
			})
			.catch(res => console.error(res))
	} catch (error) {
		console.warn(`ASRE_ERROR:\n ${error}`)
	}
}

export const initializeApp = async (accountType = 'personal') => {
	const {FetchPersonalAccount, FetchCompanyAccount} = useAuthApis()

	const fetchAccount = accountType === 'personal' ? FetchPersonalAccount : FetchCompanyAccount

	return await Promise.all([FetchActivityPerformance(), fetchAccount()]).then(values => {
		return values
	})
}
