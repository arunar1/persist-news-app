const Card = ({ getValue,news }) => {
    const { updated, title, abstract, media } = news;
  
    const mediaMetaData = media?.[0]?.["media-metadata"] || [];
    const mediaURL = mediaMetaData?.[0]?.url;
    const mediaCaption = media?.[0]?.caption || "media src";

    
    const showNewsDetails=(news)=>{
        const {url}=news
        console.log(url)
        getValue.setSelectedNews(url)
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
  