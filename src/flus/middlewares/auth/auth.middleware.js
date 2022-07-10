export const AuthMiddleware = {
  auth: {
    login(state, payload) {
      /* perform the state logic here! */
      state.auth.isLoggedIn = true;
      state.auth.user = payload?.data?.user;
      state.auth.api_token = payload?.data?.access_token;

      /* return the new state data */
      return {
        ...state,
      };
    },
  },
};
