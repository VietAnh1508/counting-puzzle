import React, { Component, Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import Count from "../game/count";
import Chat from "../game/chat";

class Game extends Component {
  state = {
    goal: 32,
    maxCount: 3,
    minCount: 1,
    userCount: 0,
    currentCount: 0,
    isEndGame: false,
    isRestart: false
  };

  handleUserCount = data => {
    this.setState({
      userCount: data.value
    });
  };

  handleEndGame = () => {
    this.setState({ isEndGame: true });
  };

  checkStatusGame = currentCount => {
    if (currentCount.currentCount === this.state.goal) {
      this.setState({ isEndGame: true });
    }
  };

  handleRestart = () => {
    this.setState({ isRestart: true });
  };

  render() {
    return (
      <Fragment>
        <Col md={8} mdOffset={2}>
          <Row>
            <Col md={8}>
              <Chat
                minCount={this.state.minCount}
                maxCount={this.state.maxCount}
                userCount={this.state.userCount}
                checkStatusGame={this.checkStatusGame}
                isEndGame={this.state.isEndGame}
                isRestart={this.state.isRestart}
              />
            </Col>
            <Col md={4}>
              <Count
                minCount={this.state.minCount}
                maxCount={this.state.maxCount}
                makeACount={this.handleUserCount}
                isEndGame={this.state.isEndGame}
                isRestart={this.state.isRestart}
                restartGame={this.handleRestart}
              />
            </Col>
          </Row>
        </Col>
      </Fragment>
    );
  }
}

export default Game;
