import React, { Component } from "react";
import {
  Row,
  Col,
  FormGroup,
  InputGroup,
  ControlLabel,
  FormControl,
  Button
} from "react-bootstrap";
import ConfirmRestart from "../modal/comfirmRestartModal";

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      isShowModal: false
    };
    this.btnCount = React.createRef();
    this.btnRestart = React.createRef();
  }

  handleDropdownChange = e => {
    this.setState({ value: e.target.value });
  };

  handleCount = () => {
    if (this.state.value !== "") {
      this.props.makeACount({ value: this.state.value });
    }
  };

  confirmRestart = () => {
    this.setState({ isShowModal: true });
  };

  handleCloseModal = () => {
    this.setState({ isShowModal: false });
  };

  handleRestart = () => {
    this.setState({ isShowModal: false });
    this.props.restartGame();
  };

  componentWillReceiveProps(nextProps) {
    const { isRestart } = nextProps;
    if (isRestart) {
      this.setState({ value: "" });
    }
  }

  createDropdownElements = () => {
    let options = [
      <option key="" value="" disabled>
        -- Select --
      </option>
    ];

    for (let i = this.props.minCount; i <= this.props.maxCount; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return options;
  };

  render() {
    const { isEndGame, isRestart } = this.props;
    let isBtnCountDisable = isEndGame;
    if (isEndGame && isRestart) {
      isBtnCountDisable = false;
    }

    return (
      <React.Fragment>
        <FormGroup>
          <ControlLabel>How many numbers will you count?</ControlLabel>
          <Row>
            <Col md={10}>
              <InputGroup>
                <FormControl
                  componentClass="select"
                  value={this.state.value}
                  onChange={this.handleDropdownChange}
                >
                  {this.createDropdownElements()}
                </FormControl>
                <InputGroup.Button>
                  <Button
                    bsStyle="primary"
                    ref={this.btnCount}
                    disabled={isBtnCountDisable}
                    onClick={this.handleCount}
                  >
                    Count
                  </Button>
                </InputGroup.Button>
              </InputGroup>
            </Col>
            <Col md={2}>
              <Button ref={this.btnRestart} onClick={this.confirmRestart}>
                Restart
              </Button>
            </Col>
          </Row>
        </FormGroup>
        <ConfirmRestart
          show={this.state.isShowModal}
          closeModal={this.handleCloseModal}
          confirmRestart={this.handleRestart}
        />
      </React.Fragment>
    );
  }
}

export default Count;
