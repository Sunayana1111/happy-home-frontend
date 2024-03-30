/* eslint-disable react/prop-types */
import React from "react";
import { Button, Modal } from "react-bootstrap";

function CustomModal({ showModal, handleClose }) {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Success</Modal.Title>
      </Modal.Header>
      <Modal.Body>Your event was successful!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;
