import {MMKVLoader} from "react-native-mmkv-storage"

const MMKV = new MMKVLoader().initialize()

const USERDATA = "bsp__userData"
const ISACTIVE = "bsp__isActive"
const APITOKEN = "bsp__apiToken"

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

const destory = () => {
	MMKV.clearStore()
	MMKV.clearMemoryCache()
}

export {saveUser, getUser, setIsActive, isActive, setToken, getToken, destory}
