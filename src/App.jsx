import Navbar from './components/Navbar';
import './App.css';
import Graphs from './components/Graph';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';



function App() {
  return (
  <div className='w-full flex flex-col md:m-auto'>
    <Navbar/>
    <Graphs/>
    <About/>
    <Testimonials/>
    <Footer/>
  </div>
  );
}

export default App;
