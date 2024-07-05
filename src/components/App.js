import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './Header';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Cart from '../pages/Cart';

import '../scss/app.scss';

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />} />
            <Route path="/123" element={<h1>123</h1>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
