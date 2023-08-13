import './App.css';
import AddProduct from './AddProduct.js';
import "./product.css";
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <AddProduct />
    </div>
  );
}

export default App;