import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Content } from "./components/Content";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Content />
      <Contact />
    </div>
  );
}

export default App;
