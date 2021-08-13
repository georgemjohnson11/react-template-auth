import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewUserProfileForm from "./NewUserProfileForm";

class NewUserProfileModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    const create = this.props.create;

    var title = "Editing UserProfile";
    var button = <Button onClick={this.toggle}>Edit</Button>;
    if (create) {
      title = "Creating New UserProfile";

      button = (
        <Button
          color="primary"
          className="float-right"
          onClick={this.toggle}
          style={{ minWidth: "200px" }}
        >
          Create New
        </Button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewUserProfileForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              userprofile={this.props.userprofile}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewUserProfileModal;