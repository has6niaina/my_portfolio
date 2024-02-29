import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

function ContactMe({ showModal, handleClose }) {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3mkmzrn', 'template_itw7n1o', form.current, '5GwTvaZ4Nwp1WE39l')
      .then((result) => {
        toast("Merci d'avoir laisser un message!", {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "toast-message",
        });
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <div className="modal-contenty">
            <Form ref={form} onSubmit={sendEmail}>
          <Modal.Header closeButton>
            <Modal.Title>Laissez-moi un petit mot </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Group className="mb-3">
                <Form.Label>Votre nom</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Jaonina Doe"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Votre adresse</Form.Label>
                <Form.Control
                  type="email"
                  name="user_email"
                  placeholder="email@exemple.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} />
              </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fermer
            </Button>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Envoyer
            </Button>
          </Modal.Footer>
            </Form>
        </div>
      </Modal>
    </>
  );
}

export default ContactMe;
