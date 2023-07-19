
export default function Cards({name,desc,language,preview}){
  
    try {
        if (desc == null) {
        return(
            <div className="card_body">
                <img src={require(`../assets/${name}.svg`)} alt={`card_icon_${name}`}  />
                <span>{name}</span>
            </div>
        )
    }
    return(
        <div 
        className="card_body project_card" >
            
            <div className="preview_project">
                <img src={require(`../assets/${name}.svg`)} alt={`card_icon_${name}`} />
            </div>
            <span>{name}</span>
            <p>{desc}</p>
            <i>{language}</i>
          
                <div className="option_card">
                    <a  href={preview}  
                    rel="noreferrer" 
                    target="_blank" 
                    className="preview_code button">
                        CODING
                    </a>
                </div>
            
        </div>
    )

    } catch (error) {
        console.log(error)
    }
    
    
   
}
