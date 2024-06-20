import React, { useContext } from 'react'
import { newsContext } from '../../hooks/UseContextNews'
import Details from './Details';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function NewsDetails() {
    const {selectedNews,setSelectedNews}=useContext(newsContext)
    const navigate = useNavigate();
    const [show, setShow] = useState(true);

    const reDirect=()=>{
      setShow(false)
      navigate('/')
    }

    console.log(selectedNews)

  return (
    <div>{selectedNews!=''?(<Details news={selectedNews}/>):(
      <>
      <Alert style={{marginTop:'7rem',marginInline:'1rem'}} show={show} variant="success">
        <Alert.Heading>My Alert</Alert.Heading>
        <p>
          Some error occure please try again
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => reDirect()} variant="outline-success">
            Go Home
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() =>setShow(true)}>Show Alert</Button>}
    </>
    )}</div>
  )
}
