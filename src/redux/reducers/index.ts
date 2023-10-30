import authReducer from "./authReducer";
import miscReducer from "./miscReducer";

const rootReducer = {
  app: miscReducer,
  auth: authReducer,
};

export default rootReducer;
