import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend.bitmoservice.com/api/resources/v1/partner/',
});

export const apiService = ({url, method = 'GET', data, headers}) => {
  return new Promise((resolve, reject) => {
    api({
      url,
      method,
      data,
      headers: {
        Client_Secret: 'Ku0DjUFHdGUUbvEkHqv975WLPQv5DJYpK6k',
        App_No: 'dTpHX90873',
        Resource_Code: '003',
        ...headers,
      },
    })
      .then(res => {
        // to push error to the catch block
        if (res.data.code !== 200) {
          return reject(res.data);
        }
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err.response?.data);
      });
  });
};

export const apis = {
  signup: data => apiService({url: 'signup', method: 'POST', data}),
  verifyOtp: (data, headers) =>
    apiService({url: 'verify-otp', method: 'POST', data, headers}),
  resendOtp: headers =>
    apiService({url: 'resend-otp', method: 'POST', headers}),
};
