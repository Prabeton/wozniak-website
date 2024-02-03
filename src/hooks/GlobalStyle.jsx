import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body{
    /* background: linear-gradient(to bottom, #8B008B, #000000); */
    background-color: #232323;
	  display: flex;
    justify-content: end;
    flex-direction: column;
    align-items: center;
    font-family: Inter;
    text-align: center;
    margin: 0;
    font-family: Inter;
    caret-color: #232323;
  }
`;

const GlobalStyles = () => {
  return (
    <>
      <GlobalStyle />
    </>
  );
};
export default GlobalStyles;
