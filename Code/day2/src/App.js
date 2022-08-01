// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import MyComponent from './components/MyComponent';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <MyComponent />
      <Footer />
    </div>
  )
}

export default App;
