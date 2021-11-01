import "./App.css";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Intro from "./component/intro/Intro";
import ProductList from "./component/productList/ProductList";
import Toggle from "./component/toggle/Toggle";
import { ThemeContext } from "./context";
import { useContext } from "react";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
