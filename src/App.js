import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Child from './components/Child';
import IMG1 from './h3.png';
import IMG2 from './h2.jpg';
import IMG3 from './h1.jpg';
import IMG4 from './h4.webp';
import IMG5 from './h5.jpg';
import IMG6 from './h6.jpg';
function App() {
  return (
    <div className="App">
      <Navbar/>

      <div className='mainH'>
        <h1 classname='MainH'>AVAILABLE PRODUCTS</h1>
      </div>
      <div className='MainCard col-lg-3 col-md-6 mt-3'>
        <div className='card1'>
        <div className='d1' >          <Child imgg={IMG1} title='Handfees' details='Best Handfrees' button='Add to Cart' />
          </div>
          <div className='d1' >          <Child imgg={IMG2} title='Charger' details='12W Fast Charger' button='Add to Cart' />
          </div>
          <div className='d1' >          <Child imgg={IMG3} title='Cover for Iphone' details='Flexible Cover' button='Add to Cart' />
          </div>
 
        </div>
        <div className='card2'>
        <div className='d1' >          <Child imgg={IMG4} title='Transparent Cover' details='Flexible Cover' button='Add to Cart' />
          </div>
          <div className='d1' >          <Child imgg={IMG5} title='Airbuds' details='Airbuds with 2000mAh Battery' button='Add to Cart' />
          </div>
          <div className='d1' >          <Child imgg={IMG6} title='Powerbank' details='Ultra fast Powerbank with two ports' button='Add to Cart' />
          </div>
   
        </div>
        
      </div>
 
     <Footer/>
    </div>
  );
}

export default App;
