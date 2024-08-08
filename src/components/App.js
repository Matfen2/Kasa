// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../styles/App.sass'
import Header from './Header';
import Home from './Home';
import Logements from './Logements';
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/logements/:id" element={<Logements />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
