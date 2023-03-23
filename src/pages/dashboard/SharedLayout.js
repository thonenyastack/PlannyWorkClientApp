import { Outlet, Link } from "react-router-dom";

import Wrapper from "../../assets/wrappers/SharedLayout";
import { Navbar, BigSideBar, SmallSideBar } from "../../components/index.js";

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSideBar />
        <BigSideBar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default SharedLayout;
