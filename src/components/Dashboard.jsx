import { useUser } from "../context/UserContext";

const Dashboard = () => {
  const { user, logout } = useUser();

  const role = user.role;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Logged in as: <b>{role.toUpperCase()}</b></p>

      <h3>Resources</h3>

      {/* Admin Settings */}
      <p>
        Admin Settings —
        {role === "admin" ? " Allowed ✅" : " Locked 🔒"}
      </p>

      {/* Edit Content */}
      <p>
        Edit Content —
        {role === "admin" || role === "editor"
          ? " Allowed ✅"
          : " Locked 🔒"}
      </p>

      {/* View Reports */}
      <p>
        View Reports —
        {role === "admin" || role === "editor" || role === "viewer"
          ? " Allowed ✅"
          : " Locked 🔒"}
      </p>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;




