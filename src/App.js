
import './App.css';
import { FaStar } from 'react-icons/fa';
import { FaCartShopping } from "react-icons/fa6";


function App() {
  return (
    <div>
      <header>
        <h4>Start Bootstrap</h4>
        <li>Home</li>
        <li>About</li>
        <li>Shop</li>
        <button><FaCartShopping /> <span className='cart'>Cart</span> <span className='nol'>0</span></button>
      </header>


       <section>
        <div className='container-fluid'>
             <h1>Shop in style</h1>
          <p>With this shop hompeage template</p>
        </div>

        <div className='container2'>
          <div className='containers'>
            <div className='top'>
             <p className='money'>450x300</p>
             </div>
            <h5>Fancy Product</h5>
            <p>$40.00 - $80.00</p>
            <div className='buttonbox'>
              <button>View options</button>
            </div>
          </div>
          <div className='containers'>
            <div className='top'>
             <p className='money'>450x300</p>
             <div>
             <span className='sale'>Sale</span>
             </div>
             </div>
            <h5>Special Item</h5>
            <p><FaStar color='yellow' /><FaStar color='yellow' /><FaStar color='yellow' />
            <FaStar color='yellow' /><FaStar color='yellow' /></p>
            <p><span className='line'>$20.00</span> $18.00</p>
            <div className='buttonbox1'>
              <button>Add to cart</button>
            </div>
          </div>
          <div className='containers'>
            <div className='top'>
             <p className='money'>450x300</p>
             <div>
             <span className='sale1'>Sale</span>
             </div>
             </div>
            <h5>Sale Item</h5>
            <p><span className='line'>$50.00</span> $25.00</p>
            <div className='buttonbox'>
              <button>Add to cart</button>
            </div>
          </div>
          <div className='containers'>
            <div className='top'>
             <p className='money'>450x300</p>
             </div>
            <h5>Popular Item</h5>
            <p><FaStar color='yellow' /><FaStar color='yellow' /><FaStar color='yellow' />
            <FaStar color='yellow' /><FaStar color='yellow' /></p>
            <p>$40.00</p>
            <div className='buttonbox1'>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
        <div className='container2'>
        <div className='containers'>
            <div className='top'>
             <p className='money'>450x300</p>
             <div>
             <span className='sale2'>Sale</span>
             </div>
             </div>
            <h5>Sale Item</h5>
            <p><span className='line'>$50.00</span> $25.00</p>
            <div className='buttonbox'>
              <button>Add to cart</button>
            </div>
            
          </div>
          <div className='containers'>
            <div className='top'>
             <p className='money'>450x300</p>
             </div>
            <h5>Fancy Product</h5>
            <p>$40.00 - $80.00</p>
            <div className='buttonbox'>
              <button>View options</button>
            </div>
          </div>
          <div className='containers'>
            <div className='top'>
             <p className='money'>450x300</p>
             <div>
             <span className='sale3'>Sale</span>
             </div>
             </div>
            <h5>Special Item</h5>
            <p><FaStar color='yellow' /><FaStar color='yellow' /><FaStar color='yellow' />
            <FaStar color='yellow' /><FaStar color='yellow' /></p>
            <p><span className='line'>$20.00</span> $18.00</p>
            <div className='buttonbox1'>
              <button>Add to cart</button>
            </div>
          </div>
          <div className='containers'>
            <div className='top'>
             <p className='money'>450x300</p>
             </div>
            <h5>Popular Item</h5>
            <p><FaStar color='yellow' /><FaStar color='yellow' /><FaStar color='yellow' />
            <FaStar color='yellow' /><FaStar color='yellow' /></p>
            <p>$40.00</p>
            <div className='buttonbox1'>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
       </section>

       <footer>
        <div className='footerbox'>
          <p>Copyright © Your Website 2023</p>
        </div>
       </footer>
    </div>
  );
}

export default App;
