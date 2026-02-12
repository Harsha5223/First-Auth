import ResourceItem from "./ResourceItem";

const ResourceList = ({ resources, user }) => {
  return (
    <div>
      <h3>Resources</h3>
      {resources.map((resource) => (
        <ResourceItem
          key={resource.id}
          resource={resource}
          user={user}
        />
      ))}
    </div>
  );
};

export default ResourceList;
