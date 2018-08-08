export const reducer = (state = { loggedin: false }, action) => {
  if (action.type == "UPDATE") {
    return {
      ...state,
      ...action.data
    };
  }

  if (action.type == "LOGIN_REQUEST") {
    return {
      ...state,
      loggedin: true
    };
  }

  if (action.type == "LOGOUT_REQUEST") {
    return {
      ...state,
      loggedin: false
    };
  }

  return { ...state };
};
