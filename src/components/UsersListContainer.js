// Todo implement getUsers func in AppContext
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Loading from "./Loading";
import Wrapper from "../assets/wrappers/JobsContainer";

const UsersListContainer = () => {
  const { getUsers, users, isLoading } = useAppContext();

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  if (users.length === 0) {
    return <div>No Users to display</div>;
  }
};

export default UsersListContainer;
