import Wrapper from "../assets/wrappers/UserInfoWrapper";
import { Link } from "react-router-dom";
const UserInfo = ({ _id, name, email }) => (
  <Wrapper>
    <header>
      <div className="profile-icon">{name.charAt(0)}</div>
      <div className="info">
        <p> {name} </p>
        {/* <h5> {email}</h5> */}
      </div>
    </header>
    <div className="content"></div>
    <footer>
      <Link to="/all-jobs" className="btn job-details">
        View Details
      </Link>
    </footer>
  </Wrapper>
);

export default UserInfo;
