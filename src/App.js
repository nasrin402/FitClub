import './App.css';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Join from './components/join/Join';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';
import Testimonials from './components/testimonials/Testimonials';
function App() {
  return (
    <div className="App">
    <div className='container'>
    <Hero />
    <Programs />
    <Reasons />
    <Plans />
    <Testimonials />
    <Join />
    <Contact />
    <Footer />
    </div>
     
    </div>
  );
}

export default App;
