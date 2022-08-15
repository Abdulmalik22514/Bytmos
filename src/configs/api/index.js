import axios from 'axios'
import {getToken} from '../../services/authServices'
import {config} from './../config'
import {ResConfigs} from './../resConfig'

const BaseUrl = config('api.baseUrl')
const appConfigs = config('app')

const HttpClient = axios.create({
	responseType: 'json',
})

const FileUploaderClient = axios.create({
	responseType: 'json',
	headers: {
		'Content-Type': 'multipart/form-data',
	},
})

// request interceptors
HttpClient.interceptors.request.use(configs => {
	/* Configure the api resource base url. */

	configs.baseURL = BaseUrl

	/* Append the client secret and app no to the request header */
	configs.headers.common['Client_Secret'] = appConfigs?.clientSecret
	configs.headers.common['App_No'] = appConfigs?.appNo

	/* config resource codes and authorization header dynamically  */
	ResConfigs.forEach(resource => {
		if (configs.url.includes(resource?.path)) {
			/* Check if the resource is a protected resource */
			if (resource?.auth) {
				/*  add the resource code and authorization header*/
				configs.headers.common['Resource_Code'] = resource?.code
				configs.headers.common['Authorization'] = `Bearer ${getToken()}`
			} else {
				/* Only set the resource header  */
				configs.headers.common['Resource_Code'] = resource?.code
			}
		}
	})

	/* Return the configurations to Axios */
	return configs
})

/* uploader client  */
FileUploaderClient.interceptors.request.use(configs => {
	/* Here we're dynamically parsing the storage path */
	const storageBase = config(`api.storage.${configs?.url}`)
	const cloudName = config('services.cloudinary.cloudName')

	configs.url = ''
	/* set the cloud path  */
	const basePath = storageBase?.replace(':pathParam', cloudName)
	configs.baseURL = basePath

	return configs
})

/* response interceptors */
HttpClient.interceptors.response.use(
	response => {
		return Promise.resolve(response?.data)
	},
	error => {
		return Promise.reject(error?.message ? error?.message : error?.response?.data)
	},
)

/* uploader response interceptor */
FileUploaderClient.interceptors.response.use(
	response => {
		return Promise.resolve(response?.data)
	},
	error => {
		return Promise.reject(error?.message ? error?.message : error?.response?.data)
	},
)

/* export  */

export const {GET, POST, PUT, DELETE, PATCH, UPLOADER_POST, UPLOADER_PUT} = {
	GET: HttpClient.get,
	POST: HttpClient.post,
	PUT: HttpClient.put,
	DELETE: HttpClient.delete,
	PATCH: HttpClient.patch,
	Client: HttpClient,
	UPLOADER_POST: FileUploaderClient.post,
	UPLOADER_PUT: FileUploaderClient.put,
}
