import {useEffect,useState} from "react";
import Cards from "../component/card";
import { init, send } from "@emailjs/browser";

let repositorio;
const repos = []
await gitApi();

export default function Main(){
    const skills = ["JAVA","HIBERNATE","SPRING","DOCKER","REACT NATIVE","REACT"]
    init("9c0WCrl2xIjxabuoE")
    return(
        <main id="page-wrap">
            <section id="Tecnologia" className="text_frame">
                <Typewriter text={"Olá meu nome é Vitor de Jesus e sou um Desenvolverdor."}/>
                <p>"Transformando desafios em código eficiente: Desenvolvimento que impulsiona resultados"</p>
                <div className="skills">
                  {skills.map(item=>{
                    return <Cards  key={item} name={item} />
                  })}
                </div>  
            </section>
            <section id="Projetos" className="project">
              
              <h1>Projetos</h1>
              <div className="project_cards">
                {repos.filter(item=>item[1]!=null).map(item=>{
                  return <Cards key={"project_"+item} name={item[0]} 
                  desc={item[1]}
                  language={item[2]}
                  preview={item[3]}
                  />
                })}
                </div>

            </section>
            <section id="Contatos"className="contact">
              <h1>Envie-me uma mensagem!</h1>


             
                <div className="card_contact">
                  <input type="text" name="name" placeholder="Digite seu nome" id="input_name" />  
                  <input type="email" name="email"  placeholder="Digite seu email" id="input_email" />
                  <textarea type="text"  name="messager" placeholder="Digite sua mensagem" id="input_messager" />
                  <button onClick={emailSend} className="button">Enviar</button>
                </div>
             


              <div className="contact_icons">
                <a href="https://linkedin.com/in/vitor-santos-452500224" target="_blank" className="icon_lk"/>
                <a href="https://github.com/VitaminaNescau" target="_blank" className="icon_git"/>
               
             
             
            
              </div>
            </section>
        </main>
    )
}
const Typewriter = ({ text }) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          clearInterval(timer);
        }
      }, 100); // Intervalo de tempo entre cada caractere (ajuste conforme desejado)
  
      return () => {
        clearInterval(timer);
      };
    }, [currentIndex, text]);
  
    return <span className="text_first">{displayText}</span>;
  };
async function gitApi(){
  const url = "https://api.github.com/users/vitaminanescau/repos" 
  await fetch(url)
    .then(res=>{return res.json()})
    .then(p=>{
        repositorio = p
        repositorio.forEach(repo=>{
            repos.push([repo.name
              ,repo.description
              ,repo.language
              ,repo.html_url])
        })
    })
  }
          
function emailSend(event){
  var template ={
    name :    document.getElementById("input_name").value,
    email:    document.getElementById("input_email").value,
    message : document.getElementById("input_messager").value
    }

    return send("service_var8sqe","template_f75wcir",template).then(function(response) {
      console.log('SUCCESS!', response.status);
      
    }, function(error) {
      console.log('FAILED...', error);
    });

}
          
          
          