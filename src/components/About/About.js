import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export default function About() {
  return (
    <div style={{marginTop:'7rem',marginInline:'2rem'}}>
      <Card className="text-center">
      <Card.Header>Welcome</Card.Header>
      <Card.Body>
        <Card.Title>Created by @r</Card.Title>
        <Card.Text>
          You can see the latest news here
        </Card.Text>
        <Button variant="primary"><Link style={{color:'white',textDecoration:'none'}} to='https://github.com/arunar1/persist-news-app'>Source Code</Link></Button>
      </Card.Body>
      <Card.Footer className="text-muted">*****</Card.Footer>
    </Card>
    </div>
  )
}
