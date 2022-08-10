const INPUT_LIST = [
  {label: 'First Name*', key: 'first_name'},
  {label: 'Facebook', key: 'facebook_link'},
  {label: 'Last Name*', key: 'last_name'},
  {label: 'Email*', key: 'email'},
  {label: 'Name of Business*', key: 'business_name'},
  {label: 'Phone Number*', key: 'phone_number'},
  {label: 'Instagram', key: 'instagram_link'},
  {label: 'City/State*', key: 'state'},
  {label: 'Location in this City/State* ', key: 'location'},
];

const BUSINESS_INPUT_LIST = [
  {label: 'Registrar First Name*', key: 'first_name'},
  {label: 'Registrar Last Name*', key: 'last_name'},
  {label: 'Name of Company*', key: 'company_name'},
  {label: 'Registrar Position*', key: 'registrar_position'},
  {label: 'Email of Company*', key: 'email'},
  {label: 'Phone Number*', key: 'phone_number'},
  {label: 'Instagram', key: 'instagram_link'},
  {label: 'City/State*', key: 'state'},
  {label: 'Company location in this City/State* ', key: 'location'},
  {label: 'Facebook', key: 'instagram_link'},
];

export const getInputValues = (keys = []) => {
  return INPUT_LIST.filter(item => [...keys].includes(item.key));
};

export const getBusinessInputValues = (keys = []) => {
  return BUSINESS_INPUT_LIST.filter(item => [...keys].includes(item.key));
};

export const UPPER_KEYS = [
  'first_name',
  'last_name',
  'email',
  'business_name',
  'phone_number',
];

export const BUS_UPPER_KEYS = [
  'first_name',
  'last_name',
  'company_name',
  'registrar_position',
];
