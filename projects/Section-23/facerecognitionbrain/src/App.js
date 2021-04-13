
import { Component } from 'react';

import './App.css';

import Particles from 'react-particles-js';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
    };
  };

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onSubmit = () => {
    console.log('Clicked');
  }

  render(){
    return (
      <div className="App">
        <Particles 
        className="particles"
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onSubmit}
        />
        {/*<FaceRecognition /> */}
      </div>
    );
  }

}

