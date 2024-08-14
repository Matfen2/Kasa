// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../styles/App.sass';
import Header from './Header';
import Home from './Home';
import Logements from './Logements';
import Footer from "./Footer";
import About from "./About";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logements/:id" element={<Logements />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
