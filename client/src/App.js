import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Cabecalho from './componentes/cabecalho';
import Checklist from './pages/checklist';


function App() {

  return (

    <div className="App">
      <Cabecalho />
      <Router>

        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/checklist">Checklist</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/checklist" element={<Checklist />} />
            <Route path="/" element={'Home'} />
          </Routes>
        </div>

      </Router>
    </div>

  );
}

export default App;
