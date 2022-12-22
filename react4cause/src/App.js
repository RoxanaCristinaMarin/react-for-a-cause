import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Navbar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';
import ImageOne from './components/ImageOne';
import ImageTwo from './components/ImageTwo';
import ImageThree from './components/ImageThree';
import ImageFour from './components/ImageFour';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <ImageOne />
      <Home />
      <ImageTwo />
      <About />
      <ImageThree />
      <Donate />
      <ImageFour />
      <Contact />
      <Header />
      <Navbar />
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
