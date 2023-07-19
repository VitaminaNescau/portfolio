import Footer from "./module/footer";
import Header from "./module/header";
import Main from "./module/main";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import {darkTheme,lightTheme} from "./themes";
import { Container } from "./style";
import  GlobalStyle  from "./global";
import './module/style.css'
function App() {
  var sun = require("./assets/SUN.svg");
  var moon = require("./assets/MOON.svg")
  const [theme,setTheme] = useState("light")
  const [icon,setIcon] = useState(moon)
  const themeToggler = ()=>{
    theme === "light" ? setTheme('dark') : setTheme('light');
    icon === sun ? setIcon(moon) : setIcon(sun);
   
  }          
  return ( 
    
    <ThemeProvider theme={theme === 'light' ? lightTheme:darkTheme}>
      <GlobalStyle/>
        <Container>
          <img src={icon.default} 
          style={{position:"absolute",left:"20%",top:"5%",cursor:"pointer"}} 
          width="30px" 
          onClick={themeToggler} />
          <Header/>
          <Main/>
          <Footer/>
        </Container>
    </ThemeProvider>
  );
}

export default App;
