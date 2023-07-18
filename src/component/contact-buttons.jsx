export default function ContactBT({name}){

    return(    
        <div className="wrapper">
            <div className="icon github">
              <span className="tooltip">{name}</span>
              <span><i className="fab fa-github"></i></span>
            </div>
        </div>
    )
}