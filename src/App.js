import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import './App.css';

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="contact" element={<Contact />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
