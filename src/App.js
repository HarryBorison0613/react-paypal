import React from "react";
import "./codepen/scss/contextAPI.scss";

const UserContext = React.createContext({
  username: 'johnny-appleseed',
  firstName: 'John',
  lastName: 'Appleseed'
});

const UserConsumer = UserContext.Consumer;

class ContextClass extends React.Component {
  state = {
    user: {
      username: 'jioke',
      firstName: 'Kingsley',
      lastName: 'Silas'
    }
  }

  render() {
    return (
      <div className="box">
        <User />
      </div>
    )
  }
}

const User = () => (
  <div>
    <UserProfile />
  </div>
)

const UserProfile = (props) => (
  <UserConsumer>
    {context => {
      return(
        <div>
          <div className="subtitle">Profile Page for</div>
          <h1 className="title">{context.username}</h1>
          <UserDetails />
        </div>
      )
    }}
  </UserConsumer>
)

const UserDetails = () => (
  <div>
    <UserConsumer>
      {context => {
        return (
          <div>
            <p><b>Username:</b> {context.username}</p>
            <p><b>First Name:</b> {context.firstName}</p>
            <p><b>Last Name:</b> {context.lastName}</p>
          </div>
        )
      }}
    </UserConsumer>
  </div>
)

function App() {
  return (
    <ContextClass />
  );
}

export default App;
