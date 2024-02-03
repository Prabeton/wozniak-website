import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 750px;
  max-width: 1920px;
  background-color: #222;
  border-radius: 10px;
  margin-top: 4px;
  padding-top: 30px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

const InitialBox = () => {
  return (
    <>
      <Container></Container>
    </>
  );
};
export default InitialBox;
