import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class ConfirmRestart extends Component {
  handleCancel = () => {
    this.props.closeModal();
  };

  handleRestart = () => {
    this.props.confirmRestart();
  };

  render() {
    return (
      <Modal show={this.props.show}>
        <Modal.Header>Confirm</Modal.Header>
        <Modal.Body>
          <p>This action will set the count to 0. Are you sure?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleCancel}>Cancel</Button>
          <Button bsStyle="danger" onClick={this.handleRestart}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ConfirmRestart;
