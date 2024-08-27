import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Logements from './components/Logements/Logements';
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Error404 from './components/Error404/Error404'; 

function App() {
  return (
    <Router>
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logements/:id" element={<Logements />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
