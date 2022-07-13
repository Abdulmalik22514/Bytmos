import axios from "axios"
import {getToken} from "../../services/authServices"
import {config} from "./../config"
import {ResConfigs} from "./../resConfig"

const BaseUrl = config("api.baseUrl")
const appConfigs = config("app")

const HttpClient = axios.create({
	responseType: "json",
})

// request interceptors
HttpClient.interceptors.request.use(configs => {
	// check if authorization token is in session

	/* Configure the api resource base url. */
	configs.baseURL = BaseUrl
	/* Append the client secret and app no to the request header */
	configs.headers.common["Client_Secret"] = appConfigs?.clientSecret
	configs.headers.common["App_No"] = appConfigs?.appNo

	/* config resource codes and authorization header dynamically  */
	ResConfigs.forEach(resource => {
		if (configs.url.includes(resource?.path)) {
			/* Check if the resource is a protected resource */
			if (resource?.auth) {
				/*  add the resource code and authorization header*/
				configs.headers.common["Resource_Code"] = resource?.code
				configs.headers.common["Authorization"] = `Bearer ${getToken()}`
			} else {
				/* Only set the resource header  */
				configs.headers.common["Resource_Code"] = resource?.code
			}
		}
	})

	/* Return the configurations to Axios */
	return configs
})

/* response interceptors */
HttpClient.interceptors.response.use(
	response => {
		return Promise.resolve(response.data)
	},
	error => {
		return Promise.reject(error.response.data)
	},
)

/* export  */

export const {GET, POST, PUT, DELETE, PATCH} = {
	GET: HttpClient.get,
	POST: HttpClient.post,
	PUT: HttpClient.put,
	DELETE: HttpClient.delete,
	PATCH: HttpClient.patch,
}
