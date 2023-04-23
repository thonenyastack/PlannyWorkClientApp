import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);

  .profile-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    text-transform: uppercase;
  }

  p {
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: capitalize;

    margin-bottom: 0.25rem;
  }
  .info p {
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: capitalize;

    margin-bottom: 0.25rem;
  }
`;

export default Wrapper;
