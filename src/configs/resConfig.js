/** User this file to overide request headers */

export const ResConfigs = [
	{
		path: "/signin",
		code: "001",
		auth: false
	},
	{
		path: "/signup",
		code: "003",
		auth: false
	},
	{
		path: "/resend-otp",
		code: "006",
		auth: true
	},
	{
		path: "/verify-otp",
		code: "007",
		auth: true
	},
	{
		path: "/verify-otp",
		code: "007",
		auth: true
	},
	{
		path: "/create-account",
		code: "010",
		auth: true
	},
	{
		path: "/update-personal-account-profile",
		code: "011",
		auth: true
	},
	{
		path: "/update-company-account-profile",
		code: "012",
		auth: true
	},
	{
		path: "/get-personal-account-profile",
		code: "014",
		auth: true
	},
	{
		path: "/get-company-account-profile",
		code: "015",
		auth: true
	},
	{
		path: "/fpw",
		code: "002",
		auth: true
	},
	{
		path: "/rpw",
		code: "004",
		auth: true
	},
	{
		path: "/verify-fpw-otp",
		code: "005",
		auth: true
	}
]
