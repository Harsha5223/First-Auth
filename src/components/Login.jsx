import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useUser();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login(role);
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login</h2>

      <button onClick={() => handleLogin("admin")}>Login as Admin</button>
      <button onClick={() => handleLogin("editor")}>Login as Editor</button>
      <button onClick={() => handleLogin("viewer")}>Login as Viewer</button>
    </div>
  );
};

export default Login;
