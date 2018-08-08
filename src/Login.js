import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

let Login = ({ username, password, loggedin, onFieldChange, onLogin }) => {
  if (loggedin) {
    return <Redirect to="/" />;
  }

  return (
    <div className="Login">
      <h1>Ukelønn login</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <label htmlFor="username">Brukernavn:</label>
        <input
          id="username"
          type="text"
          name="username"
          onChange={event => onFieldChange({ username: event.target.value })}
        />
        <br />
        <label htmlFor="password">Passord:</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={event => onFieldChange({ password: event.target.value })}
        />
        <br />
        <button onClick={() => onLogin(username, password)}>Login</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    username: state.username,
    password: state.password,
    loggedin: state.loggedin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFieldChange: changedField =>
      dispatch({ type: "UPDATE", data: changedField }),
    onLogin: (username, password) =>
      dispatch({ type: "LOGIN_REQUEST", username, password })
  };
};

Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default Login;
