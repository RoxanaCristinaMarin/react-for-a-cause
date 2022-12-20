import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Donate from './components/Donate'
import Navbar from './components/Navigation';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Donate/>
      <Contact/>
    </>
  );
}

export default App;
