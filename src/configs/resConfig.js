/** User this file to overide request headers */

export const ResConfigs = [
	{
		path: '/signin',
		code: '001',
		auth: false,
	},
	{
		path: '/signup',
		code: '003',
		auth: false,
	},
	{
		path: '/resend-otp',
		code: '006',
		auth: true,
	},
	{
		path: '/verify-otp',
		code: '007',
		auth: true,
	},
	{
		path: '/verify-otp',
		code: '007',
		auth: true,
	},
	{
		path: '/create-account',
		code: '010',
		auth: true,
	},
	{
		path: '/update-personal-account-profile',
		code: '011',
		auth: true,
	},
	{
		path: '/update-company-account-profile',
		code: '012',
		auth: true,
	},
	{
		path: '/get-personal-account-profile',
		code: '014',
		auth: true,
	},
	{
		path: '/get-company-account-profile',
		code: '015',
		auth: true,
	},

	{
		path: '/control-app-screens',
		code: '016',
		auth: true,
	},
	{
		path: '/fpw',
		code: '002',
		auth: true,
	},
	{
		path: '/rpw',
		code: '004',
		auth: true,
	},
	{
		path: '/verify-fpw-otp',
		code: '005',
		auth: true,
	},
	{
		path: '/load-packages',
		code: '017',
		auth: true,
	},

	{
		path: '/subscribe-package',
		code: '018',
		auth: true,
	},
	{
		path: '/subscribe-with-wallet-balance',
		code: '008',
		auth: true,
	},
	{
		path: '/subscribe-with-paystack-gateway',
		code: '009',
		auth: true,
	},
	{
		path: '/subscribe-with-paystack-gateway',
		code: '009',
		auth: true,
	},
	{
		path: '/get-service-category',
		code: '019',
		auth: true,
	},
	{
		path: '/create-service-category',
		code: '020',
		auth: true,
	},
	{
		path: '/get-service-sub-category',
		code: '021',
		auth: true,
	},
	{
		path: '/create-service-sub-category',
		code: '022',
		auth: true,
	},
	{
		path: '/get-service-items',
		code: '023',
		auth: true,
	},
	{
		path: '/get-service-item-detail',
		code: '027',
		auth: true,
	},
	{
		path: '/create-service-item',
		code: '024',
		auth: true,
	},
	{
		path: '/delete-service-item',
		code: '026',
		auth: true,
	},

	{
		path: '/get-pending-order',
		code: '028',
		auth: true,
	},

	{
		path: '/get-pending-order-details',
		code: '034',
		auth: true,
	},

	{
		path: '/partner/get-approved-order',
		code: '029',
		auth: true,
	},
	{
		path: '/get-approved-order-details',
		code: '035',
		auth: true,
	},
	{
		path: '/get-cancelled-order',
		code: '030',
		auth: true,
	},
	{
		path: '/get-terminated-order',
		code: '033',
		auth: true,
	},
	{
		path: '/get-terminated-order-details',
		code: '033',
		auth: true,
	},

	{
		path: '/get-unapproved-order',
		code: '031',
		auth: true,
	},
	{
		path: '/get-unapproved-order-details',
		code: '037',
		auth: true,
	},
	{
		path: '/get-completed-order',
		code: '032',
		auth: true,
	},
	{
		path: '/get-completed-order',
		code: '032',
		auth: true,
	},
	{
		path: '/get-completed-order-details',
		code: '032',
		auth: true,
	},
	{
		path: '/accept-order',
		code: '043',
		auth: true,
	},
	{
		path: '/approve-termination-request',
		code: '041',
		auth: true,
	},
	{
		path: '/send-completion-request',
		code: '042',
		auth: true,
	},
	{
		path: '/decline-order',
		code: '040',
		auth: true,
	},
	{
		path: '/get-service-requests',
		code: '046',
		auth: true,
	},
	{
		path: '/get-service-request-details',
		code: '047',
		auth: true,
	},
	{
		path: '/get-servitor-details',
		code: '048',
		auth: true,
	},
	{
		path: '/propose-on-service-request',
		code: '044',
		auth: true,
	},
	{
		path: '/cancel-proposer',
		code: '045',
		auth: true,
	},
	{
		path: '/partner-performance',
		code: '071',
		auth: true,
	},
]
