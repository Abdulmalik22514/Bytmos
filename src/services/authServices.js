import {MMKVLoader} from "react-native-mmkv-storage"

const MMKV = new MMKVLoader().initialize()

const USERDATA = "bsp__userData"
const ISACTIVE = "bsp__isActive"
const APITOKEN = "bsp__apiToken"
const SHOW_SLIDES = "bsp__showslidesOnStart"
const TERMS = "bsp__termsAndConditionPrevacyPolicy"

const saveUser = userData => {
	if (userData) {
		MMKV.setMap(USERDATA, userData, (err, res) => {
			if (err) console.error(err)
		})
	}
}

const getUser = () => {
	if (key) {
		return MMKV.getMap(USERDATA, (err, res) => {
			if (err) console.error(err)
		})
	}
}

const setIsActive = () => {
	MMKV.setBool(ISACTIVE, true)
}

const isActive = () => {
	return MMKV.getBool(ISACTIVE)
}

const setToken = token => {
	if (token) {
		MMKV.setString(APITOKEN, token, (err, res) => {
			if (err) console.error(err)
		})
	}
}

const getToken = () => {
	return MMKV.getString(APITOKEN)
}

const resetToken = () => {
	MMKV.removeItem(APITOKEN)
}
const onboardUser = () => {
	MMKV.setBool(SHOW_SLIDES, true)
}

const userHasOnboarded = () => {
	return MMKV.getBool(SHOW_SLIDES)
}

const resetUserOnboardState = (state = false) => {
	MMKV.setBool(SHOW_SLIDES, state)
}

const acceptTerms = () => {
	MMKV.setBool(TERMS, true)
}

const termsAccepted = () => {
	return MMKV.getBool(TERMS)
}

const resetTermsState = state => {
	MMKV.setBool(TERMS, state)
}

const destorySession = () => {
	if (userHasOnboarded() && termsAccepted()) {
		MMKV.clearStore()
		MMKV.clearMemoryCache()

		resetTermsState(true)
		resetUserOnboardState(true)
	} else if (termsAccepted() && !userHasOnboarded()) {
		MMKV.clearStore()
		MMKV.clearMemoryCache()

		resetTermsState(true)
		resetUserOnboardState(false)
	} else if (!termsAccepted() && userHasOnboarded()) {
		MMKV.clearStore()
		MMKV.clearMemoryCache()

		resetTermsState(false)
		resetUserOnboardState(true)
	} else {
		MMKV.clearStore()
		MMKV.clearMemoryCache()
	}
}

export {saveUser, getUser, setIsActive, isActive, setToken, getToken, resetToken, destorySession, userHasOnboarded, onboardUser, acceptTerms, termsAccepted}