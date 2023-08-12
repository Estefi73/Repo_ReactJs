import './App.css';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';
import NavBar from './component/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartContainer from './component/CartContainer/CartContainer';
import Checkout from './component/Checkout/Checkout';
import OrderConfirm from './component/OrderConfirm/OrderConfirm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
        <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/cart' element={<CartContainer/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/order-confirmation/:id" element={ <OrderConfirm/>}/>
            <Route path='/product/:id' element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>

      </BrowserRouter>
    </div>
  );
}

export default App;
