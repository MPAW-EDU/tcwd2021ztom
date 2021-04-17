
import { Component } from 'react';

import './App.css';

import Particles from 'react-particles-js';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Clafifai from 'clarifai';

const API_KEY = '';


const app = new Clafifai.App({
  apiKey: `${API_KEY}`,
});

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

  onButtonSubmit = () => {
    console.log('Clicked');
    app.models.pedict(`${API_KEY}`, "https://samples.clarifai.com/face-det.jpg").then(
      function(response) {
        // do something with response
        console.log(response);
      },
      function(err) {
        // there was an error
      }
    );
  };

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
          onButtonSubmit={this.onButtonSubmit}
        />
        {/*<FaceRecognition /> */}
      </div>
    );
  }

}

