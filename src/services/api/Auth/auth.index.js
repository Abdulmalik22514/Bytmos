import {
  LoginAccount,
  RegisterAccount,
  ResendOTP,
  VerifyOTP,
  CreateAccount,
  UpdatePersonalAccount,
  UpdateCompanyAccount,
  FetchPersonalAccount,
  FetchCompanyAccount,
  ForgottenPassword,
  VerifyPasswordReset,
  ResetPassword,
} from './auth.apis';

export const useAuthApis = () => ({
  LoginAccount,
  RegisterAccount,
  ResendOTP,
  VerifyOTP,
  CreateAccount,
  UpdatePersonalAccount,
  UpdateCompanyAccount,
  FetchPersonalAccount,
  FetchCompanyAccount,
  ForgottenPassword,
  VerifyPasswordReset,
  ResetPassword,
});
