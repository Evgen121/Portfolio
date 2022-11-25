import './App.css';
import { NavBar } from './component/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './component/Banner';
import { Skills } from './component/Skills';
import { Projects } from './component/Projects';
import { Footer } from './component/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div> 
  );
}

export default App;
