import {
  destroySession,
  saveUser,
  setIsActive,
  setToken,
} from '../../../services/authServices';

export const AuthMiddleware = {
  auth: {
    login(state, payload) {
      /* perform the state logic here! */
      state.auth.isActive = true;
      state.auth.user = payload?.user;
      // state.auth.api_token = payload?.access_token
      state.auth.app.hasOnboarded = true;
      state.auth.app.termsAccepted = true;

      // setToken(payload?.access_token ? payload?.access_token : '')
      saveUser(payload?.user);
      setIsActive();

      /* return the new state data */
      return {
        ...state,
      };
    },

    setApiToken(state, payload) {
      /* perform the state logic here! */
      state.auth.api_token = payload?.token;

      setToken(payload?.token ? payload?.token : '');

      /* return the new state data */
      return {
        ...state,
      };
    },

    /**
     * Update user data
     * @param {object} state The current app state
     * @param {object|null|undefined} payload The new user payload data to be updated
     */
    updateUser(state, payload) {
      /* check if there is data to update  */
      if (payload?.data && Object.keys(payload?.data ?? {}).length > 0) {
        /* loop through to get the new user data  */
        Object.keys(payload?.data).forEach(key => {
          state.auth.user[key] = payload?.data[key];
        });
      }

      /* save user data */
      saveUser(state?.auth?.user);

      return {...state};
    },

    logout(state) {
      destroySession();

      state.auth.isActive = false;
      state.auth.api_token = null;
      state.auth.user = null;

      return {
        ...state,
      };
    },
  },
};
