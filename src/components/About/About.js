import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function About() {
  return (
    <div style={{marginTop:'7rem',marginInline:'2rem'}}>
      <Card className="text-center">
      <Card.Header>Hello welcome</Card.Header>
      <Card.Body>
        <Card.Title>Created by @r</Card.Title>
        <Card.Text>
          You can see the latest news here
        </Card.Text>
        <Button variant="primary"><a style={{textDecoration:'none',color:'white'}} href=''>Source code</a></Button>
      </Card.Body>
      <Card.Footer className="text-muted">*****</Card.Footer>
    </Card>
    </div>
  )
}
