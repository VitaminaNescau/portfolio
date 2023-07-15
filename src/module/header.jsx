import './style.css'

export default function Header(){
    const infos = ["Sobre mim","Projetos","Contatos"]
    
    return(
        <header>
            <Logo/>
                <div className='info'>
                    {infos.map(item=>{
                        return <span className='infos_itens'>
                            <a href={`#${item}`}>{item}</a>
                            </span>
                    })}
                </div>
        </header>
    );
}
function Logo(){
    return(
        <div className='Logo'>
             <img alt='Logo' src='' />
        </div>
       
    )
}