import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contat from './components/pages/Contat';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/projects'element={<Projects />}/>
          <Route path='/company'element={<Company />}/>
          <Route path='/contat'element={<Contat />}/>
          <Route path='/newproject'element={<NewProject />}/>
          <Route path='/project/:id'element={<Project />}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
