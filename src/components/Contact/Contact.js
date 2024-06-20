import React from 'react'
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export default function Contact() {
  return (
    <div className='container' style={{paddingTop:'7rem'}}>
        <>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
    <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <Button style={{marginTop:'2rem'}}>Submit</Button>
    </>
    </div>
  )
}
