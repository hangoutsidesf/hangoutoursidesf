import React, { Component, Fragment } from 'react';
import ReactModal from 'react-modal';


class LinkedModal extends Component {
  constructor(props) {
    super(props);
    this.state = { parklet: '', displayModal: true };

    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ parklet: nextProps.parklet[0]})
  }

  closeModal() {
    this.setState({ displayModal: false });
  }

  render() {
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
}

export default LinkedModal;
