import './App.css';

import Navbar from './components/layout/Navbar'
import Container from './components/layout/Container';
import Footer from './components/layout/Footer'

import Home from './components/pages/Home'
import Alunos from './components/pages/Alunos';
import Funcionarios from './components/pages/Funcionarios';
import Diretoria from './components/pages/Diretoria';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Container customClass="min_height">
          <Routes>
              <Route exect path='/' element={<Home />}/>
              <Route exect path='/Alunos' element={<Alunos />}/>
              <Route exect path='/Funcionarios' element={<Funcionarios />}/>
              <Route exect path='/Diretoria' element={<Diretoria />}/>'
          </Routes>
        </Container>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
