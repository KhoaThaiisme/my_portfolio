import Container from '../node_modules/react-bootstrap/esm/Container'
import './App.scss'
import About from './components/about/About'
import Hero from './components/Hero/Hero'
import Inquiry from './components/Inquiry/Inquiry'
import NavBar from './components/NavBar/NavBar'
import Preloader from './components/preloader/Preloader'
import Works from './components/Works/Works'

function App() {

  return (
  
      <div className="container">
        <NavBar />
        <Preloader />
        <About />
        <Works />
        <Inquiry />
        {/* <Hero /> */}
        {/* <div class='cursor' id="cursor">
          <div class='cursor2' id="cursor2"></div>
          <div class='cursor3' id="cursor3"></div> 
        </div> */}
      </div>
  
  )
}

export default App
