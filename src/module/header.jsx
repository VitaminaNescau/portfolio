import { useState } from 'react';
import ContactBT from '../component/contact-buttons';
import { push as Menu } from 'react-burger-menu'
import { Container } from '../style';


export default function Header(){
    const infos = ["Tecnologia","Projetos","Contatos"]
    return(
        


        <header >
            <Menu  right width={'50%'}
            noOverlay
            >
            {infos.map(item=>{
                return <a key={item} href={`#${item}`}>{item}</a>
                })}   
            </Menu>
        </header>


       
       
    );
}
function Logo(){
    return(
        <div className='Logo'>
            <img alt='Logo' src="" />
        </div>
       
    )
}
