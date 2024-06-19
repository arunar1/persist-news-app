import React from 'react'
import { Link } from 'react-router-dom';

export default function Details(props) {
    console.log(props)
    const { source,updated, title, abstract, media ,url} = props.news;

    const mediaMetaData = media?.[0]?.["media-metadata"] || [];
    const mediaURL = mediaMetaData?.[2]?.url;
    const mediaCaption = media?.[2]?.caption || "media src";
  return (
    <div>
        <div>{source}</div>
        <div>{updated}</div>
        <div>{title}</div>
        <div>{abstract}</div>
        <div>
        {mediaURL ? (
              <img src={mediaURL} alt={mediaCaption} />
            ) : (
              "No media found"
            )}
        </div>
        <Link to={url}>more</Link>
        
    </div>
  )
}
