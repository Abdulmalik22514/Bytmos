import * as yup from 'yup';

export const signUpValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('Full Name is required')
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Full name is required'),
  phoneNumber: yup
    .string()
    // .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
    .required('Phone number is required'),
  email: yup
    .string()
    .trim()
    .email('Please enter valid email')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .trim('Password must not have empty space')
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Password must have a special character',
    )
    .min(8, 'Passowrd must be at least 8 characters'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
});
