import Header from "./Componets/Header";
import Footer from "./Componets/Footer";
import "./App.css";

function App() {

const y = [2025,2026,1990];
const c={name:"KIET",location:"Ghaziabad",Estb_Year:"2023"};
  return (
    <div className="app-container">
      <Header
        title="MY WEBSITE"
        menu1="Home"
        menu2="About"
        menu3="Contact"
      />

      <main>
        <h2>WELCOME TO THE APP</h2>
        <p>This is the main content</p>
      </main>

      <Footer year={y} website="My Website" />
    </div>
  );
}

export default App;
