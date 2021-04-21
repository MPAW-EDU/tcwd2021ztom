

import { Component } from 'react';

import './App.css';

import Particles from 'react-particles-js';
import Clafifai from 'clarifai';

import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

const API_KEY = "";


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
      imageUrl: '',
      box: {},
      route: 'signin',
    };
  };

  calculateFaceLocation = (data) => {
    const clarifaiFace=  data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }
  };

  displayDetectionBox = (box) => {
    this.setState({box: box});
  };

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
    // Call the type of model in the predict method
    .predict(Clafifai.FACE_DETECT_MODEL,
       this.state.input)
    .then(res => this.displayDetectionBox(this.calculateFaceLocation(res)))
    .catch(err => console.log(err));
  };

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render(){
    return (
      <div className="App">
        <Particles 
        className="particles"
          params={particlesOptions}
        />
        <Navigation onRouteChange={this.onRouteChange}/>
        {
          this.state.route === 'home'
          ?<div>
            <Logo />
            <Rank />
            <ImageLinkForm 
              onInputChange={this.onInputChange} 
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
          </div>
          :this.state.route=== 'signin'
          ? <Signin onRouteChange={this.onRouteChange}/>
          : <Register onRouteChange={this.onRouteChange}/>
        }
      </div>
    );
  }

}

