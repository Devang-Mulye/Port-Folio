import React from 'react';

import Header from './Components/Header';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import ThreeDScene from './Components/3DScene';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <ThreeDScene /> {/* Render this component where you want the 3D scene */}
    </div>
  );
}

export default App;
