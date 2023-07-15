import { useState } from "react"

export default function Cards({name,desc,language,preview}){
    const [isBlur, setBlur] = useState(false);
    
    if (desc == null) {
        return(
            <div className="card_body">
                <img src="" alt={`card_icon_${name}`}  />
                <span>{name}</span>
            </div>
        )
    }
    
    return(
        <div onMouseEnter={()=>{{setBlur(true)}}} 
        onMouseLeave={()=>{{setBlur(false)}}}
        className="card_body project_card" >
            <img src="" alt={`card_icon_${name}`}  />
            <span>{name}</span>
            <p>{desc}</p>
            <i>{language}</i>
            {isBlur && (
                <div className="option_card">
                    <a  href={preview} target="_blank" className="preview_code">
                        CODING
                    </a>
                    <a className="preview">
                        PREVIEW
                    </a>
                </div>
            )}
        </div>
    )
}
