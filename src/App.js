import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";
import Home from "./Home.js";
import Login from "./Login.js";
import About from "./About.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  componentDidMount() {
    this.props.initialLoginStateRequest();
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = dispatch => {
  return {
    initialLoginStateRequest: () =>
      dispatch({ type: "INITIAL_LOGIN_STATE_REQUEST" })
  };
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
