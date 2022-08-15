import {UPLOADER_POST} from '../../../configs/api'
import {handleError} from '../../../utils/handleErrors'
import {storageEndpoint} from './storage.endpoints'

export const UploadImageMedia = async params => {
	try {
		return await UPLOADER_POST(storageEndpoint?.IMAGE, params)
			.then(res => res)
			.catch(err => console.error(err))
	} catch (error) {
		console.warn(`ASRE_ERROR:\n ${error}`)
	}
}
