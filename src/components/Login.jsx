import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  
  const { login: signIn } = useUser();
  const navigate = useNavigate();

  const handleSignIn = (userRole) => {
    signIn(userRole);
    navigate("/dashboard");
  };

  return (
    <main className="login-page">
      <h1>Welcome</h1>
      <h2>Please sign in</h2>

      <div className="button-group">
        <button onClick={() => handleSignIn("admin")} className="btn">
          Sign in as Admin
        </button>
        <button onClick={() => handleSignIn("editor")} className="btn">
          Sign in as Editor
        </button>
        <button onClick={() => handleSignIn("viewer")} className="btn">
          Sign in as Viewer
        </button>
      </div>
    </main>
  );
};

export default Login;
