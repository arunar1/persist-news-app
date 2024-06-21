import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Details(props) {
    console.log(props)
    const { source,updated, title, abstract, media ,url} = props.news;

 

    const mediaMetaData = media?.[0]?.["media-metadata"] || [];
    const mediaURL = mediaMetaData?.[2]?.url;
    const mediaCaption = media?.[2]?.caption || "media src";
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          {abstract}
          </Card.Text>
          
        </Card.Body>
        <div className='details-img-card'>
        <Card.Img  variant="bottom" style={{padding:'1rem'}} src={mediaURL} />
        </div>
        
        <Card.Text>{source} : {updated}</Card.Text>
      </Card>

      <Button style={{paddingInline:'2rem',marginTop:'2rem'}} target='_blank' href={url}>READ MORE</Button>
        
    </div>
  )
}
