// App.jsx
import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Logements from './Logements';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/logements" element={<Logements />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

