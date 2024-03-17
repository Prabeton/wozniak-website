import styled from "styled-components";
import PrabetonSVG from "../assets/svg/PrabetonSVG";

const Container = styled.div`
  height: 85px;
  width: 1466px;
  border-top: 1px solid #68809b;

  border-radius: 4px;
  margin-top: 20px;
  padding-bottom: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: end;
`;

const PowerByPrabeton = styled.div`
  font-family: Inter;
  color: #68809b;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  return (
    <>
      <Container>
        <PowerByPrabeton>
          <PrabetonSVG size="30" fill="#68809b" />
          <div>power by prabeton</div>
        </PowerByPrabeton>
      </Container>
    </>
  );
};
export default Footer;
