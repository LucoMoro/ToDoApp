import './App.css';


//components
import Navbar from './components/Navbar.js';
import Doing from './pages/Doing.js';
import Done from './pages/Done.js';
import About from './pages/About.js';
import Home from './pages/Home';

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break;
    case "/doing":
      component = <Doing />
      break;
    case "/done":
      component = <Done />
      break;
    case "/about":
      component = <About />
      break;
  }
  return (
    <>
      <Navbar/>
      <div className="body-container">
        { component }
      </div>
    </>
  );
}

export default App;
