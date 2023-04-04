// import { SearchContainer, JobsContainer } from "../../components";
import { useAppContext } from "../../context/appContext";

const AllUsers = () => {
  const { user } = useAppContext();
  const role = user.role;
  if (role == "user") {
    return <p> No Team Member to Show</p>;
  }
  return (
    <div>
      {/* <p>Test {JSON.stringify(user)}</p>
      <p>{role}</p> */}
      <p>user list</p>
    </div>
  );
};

export default AllUsers;
