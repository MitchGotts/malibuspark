import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Landing />
      <Routes>
        <Route path="/" exact component={Landing} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
