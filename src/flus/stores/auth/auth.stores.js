import {getToken, isActive, termsAccepted, userHasOnboarded} from "../../../services/authServices"

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
