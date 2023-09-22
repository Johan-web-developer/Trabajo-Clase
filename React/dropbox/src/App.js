 
import './App.css';
import Footer from './components/footer';
import NavBar from './components/nav.js';
import Section from './components/section';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <Section></Section>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
