import './App.css';

import { useState } from 'react' 

import Particles from 'react-particles-js';

import brain from './components/Logo/brain.png';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

const particlesOptions = {
  particles: {
      shape: {
          type: 'images',
          image: [
              {src: {brain}, height: 20, width: 20},
              {src: {brain}, height: 20, width: 20},
          ]
      }
  }
}


function App() {



  return (
    <div className="App">
      <Particles 
      className="particles"
        params={particlesOptions}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*<FaceRecognition /> */}
    </div>
  );
}

export default App;
