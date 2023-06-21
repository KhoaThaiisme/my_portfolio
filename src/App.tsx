import './App.scss'
import About from './components/about/About'
import Hero from './components/Hero/Hero'
import Inquiry from './components/Inquiry/Inquiry'
import NavBar from './components/NavBar/NavBar'
import Works from './components/Works/Works'

function App() {

  return (
    <>
      <div className="flex list-none">
        <NavBar />
        <Hero />
        <About />
        <Works />
        <Inquiry />
      </div>
    </>
  )
}

export default App
