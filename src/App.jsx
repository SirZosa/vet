import './App.css';
import NavResponsive from './components/navbar-responsive.jsx';
import Main from './page/main.jsx'
import Services from './page/services.jsx';
import OurTeam from './page/our-team.jsx';
import Testimonies from './page/testimonies.jsx';
import Contact from './page/contact.jsx';
import Footer from './page/footer.jsx';
function App() {

  return (
    <>
      <NavResponsive/>
      <Main/>
      <Services/>
      <OurTeam/>
      <Testimonies/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
