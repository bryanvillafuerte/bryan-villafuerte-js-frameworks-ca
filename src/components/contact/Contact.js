import React from 'react';
import Heading from "../Heading";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Form, Button, Row, Col } from "react-bootstrap";

const schema = yup.object().shape({
  firstName: yup.string()
    .required("Please input your first name.")
    .min(2, 'Input is too short - should be at least 2 characters.'),
  lastName: yup.string()
    .required("Please input your last name.")
    .min(2, 'Input is too short - should be at least 2 characters.'),
  email: yup.string()
    .email("This is not a valid email address.")
    .required("Please input your email address."),
  message: yup.string()
    .required("Please leave us your message.")
    .min(10, 'Input is too short - should be at least 10 characters.')
});

function Contact() {
  const { register, handleSubmit, errors } = useForm({
		validationSchema: schema
	});

  function onSubmit(data) {
      console.log("data", data);
  }

  return (
    <>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Heading title="Contact" />
          <Form onSubmit={handleSubmit(onSubmit)} className="form-signin">
              <Form.Group>
                  <Form.Label className="small text-secondary">First name</Form.Label>
                  <Form.Control name="firstName" placeholder="Enter your first name" ref={register} />
                  {errors.firstName && <p className="text-danger"><small>{errors.firstName.message}</small></p>}
              </Form.Group>

              <Form.Group>
                  <Form.Label className="small text-secondary">Last name</Form.Label>
                  <Form.Control name="lastName" placeholder="Enter your last name" ref={register} />
                  {errors.lastName && <p className="text-danger"><small>{errors.lastName.message}</small></p>}
              </Form.Group>

              <Form.Group>
                  <Form.Label className="small text-secondary">Email Address</Form.Label>
                  <Form.Control name="email" placeholder="Enter your email address" ref={register} />
                  {errors.email && <p className="text-danger"><small>{errors.email.message}</small></p>}
              </Form.Group>

              <Form.Group>
                <Form.Label className="small text-secondary">Message</Form.Label>
                <Form.Control as="textarea" name="message" rows="3" placeholder="Type your message in here." ref={register} />
                {errors.message && <p className="text-danger"><small>{errors.message.message}</small></p>}
              </Form.Group>

              <Button type="submit" variant="warning" className="text-dark" block><b>Submit</b></Button>
          </Form>
        </Col>
        <Col md={3}></Col>
      </Row>
    </>
  );
}

export default Contact;