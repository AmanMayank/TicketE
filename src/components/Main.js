import styled from "styled-components";

const label1 = "<Full Name>";
const label2 = "<Phone Number>";
const label3 = "<Email>";
const label4 = "<Confirm email>";

function Main() {
  return (
    <MainContainer>
      <LeftContainer>
        <Title>Confirm and pay</Title>
        <Details>
          <div>Enter your Details</div>
          <p>
            We'll be sending your tickets to the details below. Booking for a
            friend? Add their details.
          </p>
          <InputContainer>
            <InputBox>
              <div>{label1}</div>
              <input></input>
            </InputBox>
            <InputBox>
              <div>{label2}</div>
              <input></input>
            </InputBox>
            <InputBox>
              <div>{label3}</div>
              <input></input>
            </InputBox>
            <InputBox>
              <div>{label4}</div>
              <input></input>
            </InputBox>
          </InputContainer>
        </Details>
      </LeftContainer>
      <RightContainer>2</RightContainer>
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  display: flex;
  margin-top: 100px;
  color: #474747;
`;

const LeftContainer = styled.div`
  width: 816px;
  margin-left: 120px;
  margin-right: 24px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  border: 2px solid black;
  width: 714px;
  font-weight: 600;
  font-size: 56px;
  line-height: 56px;
`;

const Details = styled.div`
  border: 2px solid black;
  margin-top: 64px;

  div {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
  }

  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    margin-top: 8px;
  }
`;

const InputContainer = styled.div`
  margin-top: 32px;
  height: 180px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #d6d6d6;
  position: relative;
  &:nth-child(2n + 1) {
    margin-right: 24px;
  }
`;

const InputBox = styled.div`
height:68px;
div{
    width:auto;
    position:absolute;
    height:18px;
    margin-left:14px;
    padding : 0 2px 0 2px;
    font-size:12px;
    line-height:16px;
    background-color:#FFFFFF;
    color:#595959;
    z-index:2;
}

input {
    width: 384px;
    height: 60px;
    border-radius: 12px;
    margin-top:8px;
    z-index:-1
   
`;

const RightContainer = styled.div`
  width: 360px;
  margin-right: 120px;
  border: 2px solid black;
`;
