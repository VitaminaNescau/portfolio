import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

header{
    background: ${({ theme }) => theme.primaryColor};
}
body {
  background: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.fontColor.primary};
}
.card_body{
    background:${({theme})=>theme.secondColor};
    color:${({theme})=>theme.fontColor.primary};
}
.bm-burger-bars{
    background:${({theme})=>theme.emphasisColor};
}
.preview_code{
    background:${({theme})=>theme.emphasisColor};
    color:${({theme})=>theme.fontColor.second};
}
.card_contact input,#input_messager{
    background: ${({ theme }) => theme.primaryColor};
    color:${({theme})=>theme.fontColor.primary};
    border-bottom: 0.1rem solid ${({theme})=>theme.secondColor};
    opacity: .8;
}

#input_name:focus,#input_email:focus,#input_messager:focus{
    border-bottom: 0.15rem solid ${({theme})=>theme.emphasisColor};
    opacity: 1;
}
.text_first::after{
    content: "";
    background: ${({ theme }) => theme.fontColor.primary};
    padding: 1.5px;
    position: relative;
    bottom: 0px;
    animation: bar .8s  infinite;
}
.icon_git,.icon_lk{
    background-color: ${({theme})=>theme.extraColor}
}
`;
