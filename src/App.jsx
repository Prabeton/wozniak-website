import GlobalStyles from "./hooks/GlobalStyle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InitialBox from "./components/InitialBox";
// import PulpitPink from "./components/PulpitPink";
// import MyCard from "./components/MyCard";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <InitialBox />
      <Footer />
    </>
  );
}
export default App;
