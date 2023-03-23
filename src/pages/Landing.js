import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.png";
import Wrapper from "../assets/wrappers/Testing";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="logo" className="logo"></img>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Planning</span> App
          </h1>
          <p>Work Smart,Plan Easy</p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="event planning" className="img main-img"></img>
      </div>
    </Wrapper>
  );
};

export default Landing;

// const Wrapper = styled.main`
//   nav {
//     width: var(--fluid-width);
//     width: var(--max-width);
//     margin: 0 auto;
//     height: var(--nav-height);
//     display: flex;
//     align-items: center;
//   }
//   .page {
//     min-height: calc(100vh - var(--nav-height));
//     dispaly: grid;
//     align-items: center;
//     margin-top: -3rem;
//   }
//   h1 {
//     font-weight: 700;
//     span {
//       color: var(--primary-500);
//     }
//   }
//   p {
//     color: var(--gry-600);
//   }
//   .main-img {
//     display: none;
//   }

//   @media (min-width: 992px) {
//     .page {
//       grid-template-columns: 1fr 1fr;
//       column-gap: 3rem;
//     }
//     .main-img {
//       display: block;
//     }
//   }
// `;
