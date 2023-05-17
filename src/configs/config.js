const configs = {
  app: {
    clientSecret: 'Ku0DjUFHdGUUbvEkHqv975WLPQv5DJYpK6k',
    appNo: 'dTpHX90873',
  },

  api: {
    baseUrl: 'https://backend.bitmoservice.com/api/resources/v1/partner',
    storage: {
      imageUpload: 'https://api.cloudinary.com/v1_1/:pathParam/image/upload',
    },
  },
  services: {
    cloudinary: {
      apiKey: '357315174541667',
      cloudName: 'bytmos-com',
      secret: 'Zo7METDQSWGFXXfLGOjA5rjzbyE',
      preset: 'img_upload',
    },
  },
};

/**
 * The config helper function for access config object
 * @param {string} key The key defined the config object you can use the dot accessor for nested object inside key
 */
export function config(key) {
  /* use this for dot notation when access config properties e.g:
    app.name as string. So the last value in the array is the real value 
    we're tring to access  */

  const keys = key.split('.');

  if (keys.length > 1) {
    /* using dot notation access of env properties */
    let targetProperty;
    keys.forEach(key => {
      /* retreive the first accessor assign it to a var, but before that check if 
			the var has a value  */
      if (targetProperty) {
        if (typeof targetProperty[key] !== 'undefined')
          targetProperty = targetProperty[key];
      } else if (typeof configs[key] !== 'undefined')
        targetProperty = configs[key];
    });

    return targetProperty;
  }

  return configs[keys[keys.length - 1]];
}
