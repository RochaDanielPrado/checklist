import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './componentes/header/Header.css';

import Header from './componentes/header';
import Home from './pages/home';
import Checklist from './pages/checklist';
import Footer from './componentes/footer';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checklist" element={<Checklist />} />
        </Routes>

        <Footer />
      </Router>
    </div>

  );
}

export default App;
