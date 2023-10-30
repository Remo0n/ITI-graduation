import * as type from "../../constants/constants";

export const signUp = (user: any) => ({
  type: type.SIGNUP,
  payload: user,
});
