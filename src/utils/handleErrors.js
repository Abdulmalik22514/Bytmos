import {Alert} from "react-native"

export const handleError = res => {
	if (res && res?.message) {
		if (Object.values(res?.message).length > 0) {
			let errors = ""

			if (typeof res?.message !== "string" && !(res?.message instanceof String)) {
				if (Array.isArray(res?.message)) {
					errors += `${res?.message.join(" ")}\n\n`
				} else {
					Object.values(res?.message).forEach(err => {
						if (Array.isArray(err)) {
							errors += `${err.join(" ")}\n\n`
						}
					})
				}
			} else errors = res?.message

			Alert.alert("Error!", errors)
		}
	}
}
