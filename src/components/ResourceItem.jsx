const ROLE_LEVEL = {
  Viewer: 1,
  Editor: 2,
  Admin: 3,
};

const ResourceItem = ({ resource, user }) => {
  if (!user || !user.role) {
    return (
      <div>
        <h4>{resource.name}</h4>
        <p>Status: Locked 🔒</p>
      </div>
    );
  }

  const isAllowed =
    ROLE_LEVEL[user.role] >= ROLE_LEVEL[resource.minRoleRequired];

  return (
    <div>
      <h4>{resource.name}</h4>
      <p>Status: {isAllowed ? "Allowed ✅" : "Locked 🔒"}</p>
    </div>
  );
};

export default ResourceItem;
