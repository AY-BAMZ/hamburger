import React from 'react';
import './App.css';
import Header from './header/Header.js'
import Welcome from './welcome/Welcome';
import What from './whatWeDo/What.js'
import Foods from './foods/Foods.js'
import Plates from './plates/Plates.js'
import Things from './things/Things.js'
import New from './new/New.js'
import Dates from './Dates/Dates.js'
import Mostpopular from './mostPorpular/Mostpopular.js'
import Social from './socialMedia/Social.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Footer from './footer/Footer';


function App() {
  return (
    <div className="App">
      <video id="background-video" loop autoPlay muted style={{
        position: "fixed",
        width: "100%",
        left:"50%",
        top:"50%",
        height:"100%",
        objectFit: "cover",
        transform:"translate(-50%, -50%)",
        zIndex: "-1"
      }}>
        <source src="https://res.cloudinary.com/dmixz7eur/video/upload/v1600166034/istockphoto-1204095995-640_adpp_is_igl7vq.mp4" type="video/mp4" />
        <source src="https://res.cloudinary.com/dmixz7eur/video/upload/v1600166034/istockphoto-1204095995-640_adpp_is_igl7vq.mp4" type="video/ogg" />
        Your browser does not support the video tag.
    </video>
      <header className="App-header">
        <Header />
        <div>
        <Welcome />
        <What />
        <Foods />
        <Plates />
        <Things />
        <New />
        <Dates />
        <Mostpopular />
        <Social />
        <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
