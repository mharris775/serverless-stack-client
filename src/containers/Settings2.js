import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./Settings2.css";

export default class Settings2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="Settings">
        <LinkContainer to="/settings/email">
          <LoaderButton
            block
            bsSize="large"
            text=""
          >Change Email</LoaderButton>
        </LinkContainer>
        <LinkContainer to="/settings/password">
          <LoaderButton
            block
            bsSize="large"
            text=""
          >Change Password</LoaderButton>
        </LinkContainer>
      </div>
    );
  }
}