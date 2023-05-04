import './App.css';
import "./index.css"

import Hero from './components/Hero'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <h1>
        <Hero/>
        <About/>
      </h1>
    </div>
  );
}

export default App;
