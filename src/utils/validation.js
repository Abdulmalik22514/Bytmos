import * as yup from 'yup'

export const signUpValidationSchema = yup.object().shape({
	firstName: yup.string().required('First Name is required'),
	lastName: yup.string().required('Last Name is required'),
	phoneNumber: yup
		.string()
		// .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
		.required('Phone number is required'),
	email: yup.string().trim().email('Please enter valid email').required('Email is required'),
	password: yup
		.string()
		.required('Password is required')
		.trim('Password must not have empty space')
		.matches(/\w*[a-z]\w*/, 'Password must have a small letter')
		.matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
		.matches(/\d/, 'Password must have a number')
		.matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Password must have a special character')
		.min(8, 'Passowrd must be at least 8 characters'),
	confirmPassword: yup
		.string()
		.required('Confirm password is required')
		.oneOf([yup.ref('password')], 'Passwords do not match'),
})

/* password reseet validation schema */
export const resetPwdValidationSchema = yup.object().shape({
	password: yup
		.string()
		.required('Password is required')
		.trim('Password must not have empty space')
		.matches(/\w*[a-z]\w*/, 'Password must have a small letter')
		.matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
		.matches(/\d/, 'Password must have a number')
		.matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Password must have a special character')
		.min(8, 'Passowrd must be at least 8 characters'),
	password_confirmation: yup
		.string()
		.required('Confirm password is required')
		.oneOf([yup.ref('password')], 'Passwords do not match'),
})

export const accountLoginValidationSchema = yup.object().shape({
	pa_email: yup.string().trim().email('Please enter valid email').required('Email is required'),
	password: yup.string().trim().required('Password is required'),
})

/* email verification schema */
export const forgetPwdValidationSchema = yup.object().shape({
	partner_email: yup.string().trim().email('Please enter valid email').required('Email is required'),
})
