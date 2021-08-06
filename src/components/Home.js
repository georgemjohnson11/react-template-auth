import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import UserProfileList from "./UserProfileList";
import NewUserProfileModal from "./NewUserProfileModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    userprofiles: []
  };

  componentDidMount() {
    this.resetState();
  }

  getUserProfiles = () => {
    axios.get(API_URL).then(res => this.setState({ userprofiles: res.data }));
  };

  resetState = () => {
    this.getUserProfiles();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <UserProfileList
              userprofiles={this.state.userprofiles}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewUserProfileModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;