import '../App.css';
import NavBar from '../Navbar/NavBar';
import HeroSection from './HeroSection';
import Footer from "./Footer"
import Main from "./Main"
import Form from './Form';
import Contact from './Contact';
import Testimonials from '../Navbar/Testimonials';


function App() {
  return (
    <>
    <NavBar />
     <Form />
    <HeroSection />
    <Main />
    <Contact />
    <Testimonials />
    <Footer />
    </>
  );
}

export default App;
