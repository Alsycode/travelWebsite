
import './App.css';
import Navbar from './components/Navbar'; 
import Search from './components/Search'; 
import Popular from './components/Popular'; 
import Footer from './components/Footer'; 
import Testimony from './components/Testimony'; 
import Hot from './components/Hot'; 
function App() {
  return (
    <div>
      <Navbar/>
      <Search/>
      <Popular/>
      <Hot/>
      <Testimony/>
      <Footer/>
     
    </div>
  );
}

export default App;
