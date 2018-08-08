import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

let Home = ({ loggedin, onLogout }) => {
  if (!loggedin) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <h1>This is home</h1>
      <br />
      <button onClick={() => onLogout()}>Logout</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loggedin: state.loggedin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch({ type: "LOGOUT_REQUEST" })
  };
};

Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default Home;
