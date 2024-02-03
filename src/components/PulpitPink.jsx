import styled from "styled-components";
import pulpit from "../assets/png/pulpit.png";

const Container = styled.div`
  width: 1100px;
  min-height: 750px;
  background-image: url(${pulpit});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border: 2px solid yellow;
  border-radius: 30px;
  margin-top: 20px;
`;

const PulpitPink = () => {
  return (
    <>
      <Container></Container>
    </>
  );
};
export default PulpitPink;
