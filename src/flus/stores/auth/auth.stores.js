import {getToken, getUser, isActive, termsAccepted, userHasOnboarded} from '../../../services/authServices'

export const AuthStores = {
	auth: {
		isActive: isActive(),
		user: getUser(),
		api_token: getToken(),
		app: {
			hasOnboarded: userHasOnboarded(),
			termsAccepted: termsAccepted(),
		},
	},
}
