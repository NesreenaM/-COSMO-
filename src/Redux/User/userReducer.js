import {
  USER_LOGIN_FAILED,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
} from "./userTypesConstants";

export const userReducer = (
  initialState = {
    user: {
      _id: "",
      name: "",
      email: "",
      token: "",
    },
    success: false,
    isLoading: false,
    error: "",
  },
  action
) => {
  switch (action.type) {
    case USER_LOGIN_START:
      return {
        ...initialState,
        isLoading: true,
      };

    case USER_LOGIN_SUCCESS:
      return {
        user: action.payload,
        isLoading: false,
        success: true,
      };

    case USER_LOGIN_FAILED:
      return {
        ...initialState,
        error: action.payload,
        isLoading: false,
      };

    default:
      return initialState;
  }
};
