import {
  IS_AUTHENTICATING,
  LOADING,
  SET_AUTH_STATUS,
} from "../../constants/constants";

export const setLoading = (bool: boolean = true) => ({
  type: LOADING,
  payload: bool,
});

export const setAuthenticating = (bool: boolean = true) => ({
  type: IS_AUTHENTICATING,
  payload: bool,
});

export const setAuthStatus = (status: any = null) => ({
  type: SET_AUTH_STATUS,
  payload: status,
});
