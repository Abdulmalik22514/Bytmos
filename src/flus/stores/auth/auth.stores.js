import {getToken, isActive, termsAccepted, userHasOnboarded} from "../../../services/auth/authServices"

export const AuthStores = {
	auth: {
		isActive: isActive(),
		user: null,
		api_token: getToken(),
		app: {
			hasOnboarded: userHasOnboarded(),
			termsAccepted: termsAccepted()
		}
	}
}
