import { useDispatch } from "react-redux";
import { signUp } from "../redux/actions/authActions";

const SignUp = () => {
  const dispatch = useDispatch();
  const onFormSubmit = () => {
    console.log("clicked..");
    dispatch(
      signUp({
        fullname: "remon Botros",
        email: "remoon.peter12@gmail.com",
        password: "remoon1234",
      })
    );
  };
  return (
    <div>
      <button onClick={onFormSubmit}>sigun up</button>
    </div>
  );
};

export default SignUp;
