import styled from "styled-components";
import MyImage from "../assets/png/przemKwadrat.png";

const Container = styled.div`
  width: 100%;
  min-height: 750px;
  max-width: 1920px;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  border-radius: 4px;
  margin-top: 30px;
  padding-top: 30px;
  display: flex;
  justify-content: start;
  box-sizing: border-box;
`;
const Card = styled.div`
  width: 500px;
  height: 400px;
  border: 1px solid #333;
  border-radius: 20px;
  display: flex;
  padding: 10px;
  gap: 10px;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10%;
  border: 3px solid #444;
`;

const Info = styled.div`
  height: 150px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  color: #555;
  gap: 3px;
`;

const MyCard = () => {
  return (
    <>
      <Container>
        <Card>
          <Img src={MyImage} alt="myFoto" />
          <Info>
            <div>Przemysław Woźniak</div>
            <div>www.wozniak.website</div>
            <div>e-mail: przemyslaw@wozniak.website</div>
            <div>tel: 517-560-254</div>
            <div>location: Ozorków, Poland</div>
            <div>age: 46</div>
          </Info>
        </Card>
      </Container>
    </>
  );
};
export default MyCard;
