// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
