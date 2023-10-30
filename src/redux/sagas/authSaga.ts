import { SIGNUP } from "../../constants/constants";
import firebase from "../../services/firebase";
import { call, put } from "redux-saga/effects";
import { setAuthenticating, setAuthStatus } from "../actions/miscActions";

function* initRequest() {
  yield put(setAuthenticating());
  yield put(setAuthStatus({}));
}

function* authSaga({ type, payload }: any): any {
  switch (type) {
    case SIGNUP:
      try {
        yield initRequest();

        const ref = yield call(
          firebase.createAccount,
          payload.email,
          payload.password
        );
        const fullname = payload.fullname;
        const user = {
          fullname,
          email: payload.email,
          address: "",
          basket: [],
          mobile: { data: {} },
          role: "USER",
          dateJoined: ref.user.metadata.creationTime || new Date().getTime(),
        };

        yield call(firebase.addUser, ref.user.uid, user);
        yield put(setAuthenticating(false));
      } catch (e) {
        console.log(e);
      }
      break;
    default: {
      throw new Error("Unexpected Action Type.");
    }
  }
}

export default authSaga;
