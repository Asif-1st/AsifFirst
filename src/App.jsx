import Particlejs from "./components/particleBg/Particlejs"
import About from "./components/About"
import Header from "./components/Header"
import Main from "./components/Main"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"
import Form from "./components/Form"
function App() {
  return (
    <div className=" overflow-hidden">
      <Particlejs />
      <Header />
      <Main />
      <About />
      <Services/>
      <Projects/>
      <Testimonials/>
      <Form/>
    </div>
  )
}

export default App
