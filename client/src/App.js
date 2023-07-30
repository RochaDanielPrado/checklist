import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './componentes/navbar/Navbar.css';

import Header from './componentes/navbar';
import Home from './pages/home'
import Main from './componentes/main';
import Users from './pages/users';
import Checklist from './pages/checklist';
import Footer from './componentes/footer';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Main props='botao' />} />
          <Route path="/users" element={<Users />} />
          <Route path="/checklist" element={<Checklist />} />
        </Routes>

        <Footer />
      </Router>
    </div>

  );
}

export default App;
