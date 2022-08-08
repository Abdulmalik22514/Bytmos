const INPUT_LIST = [
  {label: 'First Name*', key: 'first_name'},
  {label: 'Facebook', key: 'facebook_link'},
  {label: 'Last Name*', key: 'last_name'},
  {label: 'Email*', key: 'email'},
  {label: 'Name of Business*', key: 'business_name'},
  {label: 'Phone Number*', key: 'phone_number'},
  {label: 'Instagram', key: 'instagram_link'},
];

export const getInputValues = (keys = []) => {
  return INPUT_LIST.filter(item => [...keys].includes(item.key));
};

export const UPPER_KEYS = [
  'first_name',
  'last_name',
  'email',
  'business_name',
  'phone_number',
];
