import React, { Component, Fragment } from 'react';
import ReactModal from 'react-modal';


class LinkedModal extends Component {
  constructor(props) {
    super(props);
    this.state = { displayModal: true, ...props };
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({ displayModal: false });
  }

  render() {
    if (this.state.parklet) {
      return (
        <Fragment>
          <ReactModal isOpen={this.state.displayModal} >
            <div>parklet title is: {this.state.parklet.title}</div>
            <div>parklet lat is: {this.state.parklet.position}</div>
            <button onClick={this.closeModal} >Close!</button>
          </ReactModal>
        </Fragment>
      );
    }
    return null;
  }
}

export default LinkedModal;
