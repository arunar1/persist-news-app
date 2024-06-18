
import { useContext } from "react";
import { newsContext } from "../../hooks/UseContextNews";

const Card = ({ news }) => {
  const {selectedNews,setSelectedNews}=useContext(newsContext)
    const { updated, title, abstract, media } = news;
  
    const mediaMetaData = media?.[0]?.["media-metadata"] || [];
    const mediaURL = mediaMetaData?.[0]?.url;
    const mediaCaption = media?.[0]?.caption || "media src";

    
    const showNewsDetails=(news)=>{
        setSelectedNews(news)
        console.log(selectedNews)
      }


  
    return (
      <div style={{backgroundColor:'yellow',margin:'20px'}} onClick={()=>{
        showNewsDetails(news)
      }} >
        <div >{updated}</div>
        <article >
          <div>
            <h3>{title}</h3>
            <p>{abstract}</p>
          </div>
          <div >
            {mediaURL ? (
              <img src={mediaURL} alt={mediaCaption} />
            ) : (
              "No media found"
            )}
          </div>
        </article>
      </div>
    );
  };
  
  export default Card;
  