
import About from './component/about/About'
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import Experience from './component/experience/Experience'
import Services from './component/services/Services'
import './App.css'
import Portfolio from './component/portfolio/Portfolio'
import Textimonial from './component/textimonials/Textimonial'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'
import Work from './component2/Work'
import Theme from './component/theme'


function App () {
   return (
   <>
  <Header />
  <Theme/>
  <Nav/>
  <About/>
  <Experience/>
  <Services/>
  <Portfolio/>
  <Textimonial/>
  <Contact/>
  <Footer/>
  
   </>
  )
}

export default App
   