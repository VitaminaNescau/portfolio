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
  const [theme,setTheme] = useState("light")
  const themeToggler = ()=>{
    theme === "light" ? setTheme('dark') : setTheme('light')
  }
  return ( 
    
    <ThemeProvider theme={theme === 'light' ? lightTheme:darkTheme}>
      <GlobalStyle/>
        <Container>
          <button style={{position:"absolute",zIndex:9999,left:"20%",top:"5%"}} onClick={themeToggler} >DARK</button>
          <Header/>
          <Main/>
          <Footer/>
        </Container>
    </ThemeProvider>
  );
}

export default App;
