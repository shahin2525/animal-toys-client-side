import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
// import { AuthContext } from "../../provider/AuthProvider";

const SocialLoginButton = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };
  const handleGithubSignIn = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };
  return (
    <div className="w-56 mx-auto">
      <div className="my-3  ">
        <button onClick={handleGoogleSignIn}>
          <img
            className="h-20 w-52 rounded"
            src="https://i.ibb.co/gSTHXZJ/google-btn.png"
            alt=""
          />
        </button>
      </div>
      <div className="my-3 ">
        <button onClick={handleGithubSignIn}>
          <img
            className="h-20 w-52 rounded"
            src="https://i.ibb.co/g9f4P0S/github-btn.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default SocialLoginButton;
