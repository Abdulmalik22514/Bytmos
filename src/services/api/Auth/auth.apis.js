import {Alert} from "react-native"
import {GET, PUT, POST, DELETE} from "../../../configs/api"
import {handleError} from "../../../utils/handleErrors"
import {AuthEndpoints} from "./auth.endpoints"

/** Sign in api */
export const LoginAccount = async params => {
	try {
		return await POST(AuthEndpoints.SIGNIN, params)
			.then(res => {
				if (!res?.status) {
					handleError(res)
				} else {
					Alert.alert("Success!", !Array.isArray(res?.message) ? res?.message : "")

					return res
				}
			})
			.catch(res => console.error(res))
	} catch (error) {
		console.warn(`ASRE_ERROR:\n ${error}`)
	}
}

/** Sign up api */
export const RegisterAccount = async params => {
	try {
		return await POST(AuthEndpoints.SIGNUP, params)
			.then(res => {
				if (!res?.status) {
					handleError(res)
				} else {
					Alert.alert("Success!", !Array.isArray(res?.message) ? res?.message : "")
					return res
				}
			})
			.catch(res => console.error(res))
	} catch (error) {
		console.warn(`ASRE_ERROR:\n ${error}`)
	}
}

/**
 * Resend sign up otp
 */
export const ResendOTP = async () => {
	try {
		return await POST(AuthEndpoints.RESEND_OTP)
			.then(res => {
				if (!res?.status) {
					handleError(res)
				} else {
					Alert.alert("Success!", !Array.isArray(res?.message) ? res?.message : "")
					return res
				}
			})
			.catch(res => console.error(res))
	} catch (error) {
		console.warn(`ASRE_ERROR:\n ${error}`)
	}
}
/**
 * Verify Sign up otp
 * @param {object} params formData
 */
export const VerifyOTP = async params => {
	try {
		return await POST(AuthEndpoints.VERIFY_OTP, params)
			.then(res => {
				if (!res?.status) {
					handleError(res)
				} else {
					Alert.alert("Success!", !Array.isArray(res?.message) ? res?.message : "")
					return res
				}
			})
			.catch(res => console.error(res))
	} catch (error) {
		console.warn(`ASRE_ERROR:\n ${error}`)
	}
}
/**
 * Create user account type
 * @param {object} params formData
 */
export const CreateAccount = async params => {
	try {
		return await POST(AuthEndpoints.CREATE_ACC, params)
			.then(res => {
				if (!res?.status) {
					handleError(res)
				} else {
					Alert.alert("Success!", !Array.isArray(res?.message) ? res?.message : "")
					return res
				}
			})
			.catch(res => console.error(res))
	} catch (error) {
		console.warn(`ASRE_ERROR:\n ${error}`)
	}
}
/**
 * Update user personal account information
 * @param {object} params formData
 */
export const UpdatePersoanlAccount = async params => {
	try {
		return await POST(AuthEndpoints.UPDATE_ACC, params)
			.then(res => {
				if (!res?.status) {
					handleError(res)
				} else {
					Alert.alert("Success!", !Array.isArray(res?.message) ? res?.message : "")
					return res
				}
			})
			.catch(res => console.error(res))
	} catch (error) {
		console.warn(`ASRE_ERROR:\n ${error}`)
	}
}

/**
 * Update company account
 * @param {object} params formData
 */
export const UpdateCompanyAccount = async params => {
	try {
		return await POST(AuthEndpoints.UPDATE_COM, params)
			.then(res => {
				if (!res?.status) {
					handleError(res)
				} else {
					Alert.alert("Success!", !Array.isArray(res?.message) ? res?.message : "")
					return res
				}
			})
			.catch(res => console.error(res))
	} catch (error) {
		console.warn(`ASRE_ERROR:\n ${error}`)
	}
}

/**
 * Fetch user persoanl  account information
 */
export const FetchPersonalAccount = async () => {
	try {
		return await GET(AuthEndpoints.FETCH_ACC)
			.then(res => {
				if (!res?.status) {
					handleError(res)
				} else {
					Alert.alert("Success!", !Array.isArray(res?.message) ? res?.message : "")
					return res
				}
			})
			.catch(res => console.error(res))
	} catch (error) {
		console.warn(`ASRE_ERROR:\n ${error}`)
	}
}

/**
 * Fetch company account information
 */
export const FetchCompanyAccount = async () => {
	try {
		return await GET(AuthEndpoints.FETCH_COM)
			.then(res => {
				if (!res?.status) {
					handleError(res)
				} else {
					Alert.alert("Success!", !Array.isArray(res?.message) ? res?.message : "")
					return res
				}
			})
			.catch(res => console.error(res))
	} catch (error) {
		console.warn(`ASRE_ERROR:\n ${error}`)
	}
}

/**
 * Recover user account
 * @param {object} params formData
 */
export const ForgottenPassword = async params => {
	try {
		return await POST(AuthEndpoints.FORGOT_PWD, params)
			.then(res => {
				if (!res?.status) {
					handleError(res)
				} else {
					Alert.alert("Success!", !Array.isArray(res?.message) ? res?.message : "")
					return res
				}
			})
			.catch(res => console.error(res))
	} catch (error) {
		console.warn(`ASRE_ERROR:\n ${error}`)
	}
}

/**
 * Verify password reset otp
 * @param {object} params formData
 */
export const VerifyPasswordReset = async params => {
	try {
		return await POST(AuthEndpoints.FORGOT_PWD, params)
			.then(res => {
				if (!res?.status) {
					handleError(res)
				} else {
					Alert.alert("Success!", !Array.isArray(res?.message) ? res?.message : "")
					return res
				}
			})
			.catch(res => console.error(res))
	} catch (error) {
		console.warn(`ASRE_ERROR:\n ${error}`)
	}
}

/**
 * Reset account password api
 * @param {object} params formData
 */
export const ResetPassword = async params => {
	try {
		return await POST(AuthEndpoints.RESEND_OTP, params)
			.then(res => {
				if (!res?.status) {
					handleError(res)
				} else {
					Alert.alert("Success!", !Array.isArray(res?.message) ? res?.message : "")
					return res
				}
			})
			.catch(res => console.error(res))
	} catch (error) {
		console.warn(`ASRE_ERROR:\n ${error}`)
	}
}
