import styled from "styled-components";
import PrabetonSVG from "../assets/svg/PrabetonSVG";

const Container = styled.div`
  width: 100%;
  min-height: 150px;
  max-width: 1920px;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  border-radius: 4px;
  margin-top: 20px;
  padding-bottom: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PowerByPrabeton = styled.div`
  font-family: Inter;
  color: #333;
  font-size: 16px;
  font-weight: 600;
`;

const Footer = () => {
  return (
    <>
      <Container>
        <PowerByPrabeton>
          <PrabetonSVG size="50" fill="#333" />
          <div>power by prabeton</div>
        </PowerByPrabeton>
      </Container>
    </>
  );
};
export default Footer;
