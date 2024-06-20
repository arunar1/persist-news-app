
import { useContext } from "react";
import { newsContext } from "../../hooks/UseContextNews";
import { useNavigate } from 'react-router-dom';
import Cards from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../../App.css'

const Card = ({ news }) => {
  const navigate = useNavigate();


  const {selectedNews,setSelectedNews}=useContext(newsContext)
    const { updated, title, abstract, media } = news;
  
    const mediaMetaData = media?.[0]?.["media-metadata"] || [];
    const mediaURL = mediaMetaData?.[2]?.url;
    const mediaCaption = media?.[2]?.caption || "media src";

    
    const showNewsDetails=(news)=>{
        setSelectedNews(news)
        navigate('./details')
      }


  
    return (

      <div onClick={()=>{
        showNewsDetails(news)
      }}  >
      <CardGroup style={{margin:'2rem'}}>
      <Cards>
        <Cards.Img variant="top"  src={mediaURL} className="custom-card-img" />
        <Cards.Body>
          <Cards.Title>{title}</Cards.Title>
          <Cards.Text>
          {abstract}
          </Cards.Text>
        </Cards.Body>
        <Cards.Footer>
          <small className="text-muted">{updated}</small>
        </Cards.Footer>
      </Cards>
    </CardGroup>

      </div>
    );
  };
  
  export default Card;
  