import {FlusMiddlewares} from './../../middlewares/flus.middlewares'

/** The application authentication storage actions handles */
export const AuthActions = {
	'app/auth/login-account': FlusMiddlewares.auth.login,
	'app/auth/set-api-token': FlusMiddlewares.auth.setApiToken,
	'app/auth/logout': FlusMiddlewares.auth.logout,
	'app/auth/update-user': FlusMiddlewares.auth.updateUser,
}
