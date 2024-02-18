import "./app.scss"
import Navbar from "./components/Navbar"

const App = () => {
  return <div>
    <section>
      <Navbar/>
    </section>
    <section>About Me</section>
    <section>Work Experience</section>
    <section>Projects</section>
    <section>Hobbies</section>
    <section>Contact</section>

  </div>;
};

export default App;
