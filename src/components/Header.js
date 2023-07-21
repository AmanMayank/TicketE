import styled from "styled-components";
import { AiFillQuestionCircle } from "react-icons/ai";

function Header() {
  return (
    <>
      <Container>
        <Logo>
          <img src="/images/Logo.svg" alt="logo" />
        </Logo>

        <HelpContainer>
          <AiFillQuestionCircle></AiFillQuestionCircle>
          <span>Help</span>
        </HelpContainer>
      </Container>

      <MobileHeader>
        <img src="/images/CaretCircleLeft.svg" alt="back" />
      </MobileHeader>
    </>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 72px;
  margin-top: 79px;
  margin-left: 80px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.div`
  img {
    width: 78px;
    height: 24px;
    margin-top: 24px;
    margin-left: 40px;
  }
`;

const HelpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 91px;
  height: 44px;
  margin-top: 14px;
`;

const MobileHeader = styled.div`
  width: 100%;
  height: 68px;
  padding-top: 20px;
  padding-left: 24px;

  @media (min-width: 768px) {
    display: none;
  }
`;
