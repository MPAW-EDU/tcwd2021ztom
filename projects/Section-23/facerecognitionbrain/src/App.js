

import { Component } from 'react';

import './App.css';

import Particles from 'react-particles-js';

import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

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

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  },
};

export default class App extends Component {

  constructor() {
    super();
    this.state = initialState;
  };

  loadUser = (user) => {
    this.setState({user: {
      id: user.id,
      name: user.name,
      email: user.email,
      entries: user.entries,
      joined: user.joined
    }})
  }

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

    fetch('http://localhost:5050/imageurl', {
      method: 'post',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      if (res) {
        fetch('http://localhost:5050/image', {
          method: 'put',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(res => res.json())
        .then(count => this.setState({user:{...this.state.user,entries: count}}))
        .catch(console.log())
      }
      this.displayDetectionBox(this.calculateFaceLocation(res))
    })
    .catch(err => console.log(err));
  };

  onRouteChange = (route) => {
    if (route === 'home') this.setState({isSignedIn: true})
    if (route === 'signout') {
      this.setState(initialState)
    } else{
      this.setState({route: route});
    }
  }

  render(){
    return (
      <div className="App">
        <Particles 
        className="particles"
          params={particlesOptions}
        />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
        {
          this.state.route === 'home'
          ?<div>
            <Logo />
            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
            <ImageLinkForm 
              onInputChange={this.onInputChange} 
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
          </div>
          :(this.state.route=== 'signin'
          ? <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
          : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          )
        }
      </div>
    );
  }

}

