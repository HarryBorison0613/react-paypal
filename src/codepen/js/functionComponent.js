// import logo from './logo.svg';
import React from "react";
// import "./codepen/scss/classComponent.scss";
import "./codepen/scss/functionComponent.scss";

const Title = props => (
  <h1 className="title">{ props.text }</h1>
);

function Copy() {
  return <p>
  Jaguar shark! So tell me - does it really exist? Checkmate... 
  Eventually, you do plan to have dinosaurs on your dinosaur tour, right? 
  Yeah, but your scientists were so preoccupied with whether or not 
  they could, they didn't stop to think if they should.</p>;
}

function App() {
  return (
    <div className="box">
      <Title text="Jeff Goldblum says:" />
      <Copy />
    </div>
  );
}

export default App;
