// import logo from './logo.svg';
import React from "react";
import "./codepen/scss/classComponent.scss";

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      darkMode: true
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ darkMode: !this.state.darkMode });
  }

  componentWillMount() {
    // could do something like pull state from API
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  componentDidUpdate() {

  }

  render() {
    const { title } = this.props;
    let modeClass = this.state.darkMode ? "dark-mode" : "light-mode";
    let checked = this.state.darkMode ? "checked" : "unchecked";
    return <div className={`box content ${modeClass}`}>
      <h1>{title}</h1>
      <p>I was built with a class component extending React.Component.</p>
      <label className="checkbox">
        <input 
          type="checkbox"
          defaultChecked={checked}
          onChange={this.handleChange} />
        {' '}Dark Mode
      </label>
    </div>
  }
}

function App() {
  return (
    <Card title='Example Component' />
  );
}

export default App;
