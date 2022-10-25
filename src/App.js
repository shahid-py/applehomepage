
import './App.css';
import { Header } from './components/Header';
import { Hero } from './pages/hero';
import { Scroll } from './pages/scrollsection';
import { Section } from './pages/Section';
import {Footer} from './components/Footer'

function App() {
  return (
    <div>
 <Header/>
 <Hero/>
 <Section/>
 <Scroll/>
 <Footer/>
    </div>
  );
}

export default App;
