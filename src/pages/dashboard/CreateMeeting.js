import { FormRow, Alert, FormRowSelect } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const CreateMeeting = () => {
  const { showAlert, displayAlert, position, company, jobLocation, jobType } =
    useAppContext();

  return <Wrapper></Wrapper>;
};

export default CreateMeeting;
