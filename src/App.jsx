import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Footer } from './components/Footer';

import GlobalStyle from './styles/global';

export function App() {
  return(
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      <Footer />
      <GlobalStyle />
    </>
  );
}
