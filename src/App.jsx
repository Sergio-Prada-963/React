import React from "react";
import './App.css';
import Producto from "./components/Producto";

const data = [
    {
        "img": 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F_b6BDaTMOYR4%2FSa20zIRKGYI%2FAAAAAAAABkQ%2Fdhy76xqo9yU%2Fs400%2FCAMISETAS01.jpg&f=1&nofb=1&ipt=737e1b4d3bd003e101ad2bbe13a05e43165609bfbd8965b02374b88c6cfdbbc8&ipo=images',
        "producto": 'Camiseta Negra',
        "descripcion": 'Talla M decorada con un matacho',
        "precio": 15100
    },
    {
        "img": 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dd90VLTldSmsY63QUT4THAHaHa%26pid%3DApi&f=1&ipt=1eb76d83b12b72f5219b52b59c1f4063d3205556d7dee027c3c53df264545038&ipo=images',
        "producto": 'Iguana',
        "descripcion": 'Camiseta Negra con una Iguana bonita',
        "precio": 250050
    },
    {
        "img": 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.HS_JypFDtn0k1-LkwK6fegHaFJ%26pid%3DApi&f=1&ipt=3d2e1d22d5d48bd9b75b91489e7cc7e475879eb1727217c62b6a77fc977e2c79&ipo=images',
        "producto": 'Zapatos Abuelo',
        "descripcion": 'Zapatos de abuelo marrones',
        "precio": 130600
    },
    {
        "img": 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fzapatos-viejos-35834511.jpg&f=1&nofb=1&ipt=c22c15b884ade441987d8e87f07ea328782d613fc553787a483a18f1af2d73d6&ipo=images',
        "producto": 'Zapatazos',
        "descripcion": 'Zapatos viejos en exelente condicion',
        "precio": 500550
    },
    {
        "img": 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_984136-MLM43965816361_112020-F.jpg&f=1&nofb=1&ipt=39062c9fbc23be3e70c1be3917308a113cb2f94007eac1ea0c4f488e229103f7&ipo=images',
        "producto": 'Taza React',
        "descripcion": 'Taza decorada con icono de react',
        "precio": 25020
    },
    {
        "img": 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_809491-MLM45552314667_042021-F.jpg&f=1&nofb=1&ipt=3f5de37d5a5b2e6b24501600dc303c6325cbd083c9b4f95a0c2c9c187414b933&ipo=images',
        "producto": 'Taza JS',
        "descripcion": 'Taza ilustrada en JavaScript',
        "precio": 10999
    },
]


const App = ()=>{
    return (
        <div className="contenedor">{
                data.map((dato)=>(
                    <Producto props = {dato}/>
                ))
            }
        </div>
    )
}

export default App