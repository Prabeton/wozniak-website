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
  font-size: 10px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;

const Footer = () => {
  return (
    <>
      <Container>
        <PowerByPrabeton>
          <PrabetonSVG size="30" fill="#68809b" />
          <div>W tym momencie strona korzysta z serwerów Vercel</div>
        </PowerByPrabeton>
      </Container>
    </>
  );
};
export default Footer;
