import { useUser } from "../context/UserContext";

const Dashboard = () => {
  const { user, logout: signOut } = useUser();

  const userRole = user.role;

  return (
    <main className="dashboard-page">
      <h1>Dashboard</h1>
      <p>
        Logged in as: <b>{userRole.toUpperCase()}</b>
      </p>

      <section className="resources">
        <h2>Available Resources</h2>

        {/* Admin  */}
        <p>
          Admin Settings —
          {userRole === "admin" ? " Allowed ✅" : " Locked 🔒"}
        </p>

        {/* Edit  */}
        <p>
          Edit Content —
          {userRole === "admin" || userRole === "editor"
            ? " Allowed ✅"
            : " Locked 🔒"}
        </p>

        {/* View  */}
        <p>
          View Reports —
          {userRole === "admin" || userRole === "editor" || userRole === "viewer"
            ? " Allowed ✅"
            : " Locked 🔒"}
        </p>
      </section>

      <button onClick={signOut} className="btn">
        Sign out
      </button>
    </main>
  );
};

export default Dashboard;




