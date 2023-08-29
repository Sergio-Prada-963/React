import React from "react";

const Producto = ({props}) =>{
    return(
        <div className="card">
            <div>
                <img src={props.img !== "N/A"? props.img: "https://via.placeholder.com/400"} alt="imagen" />
            </div>
            <div className="datos">
                <h3>{props.producto}</h3>
                <p>{props.descripcion}</p>
                <span>${props.precio}</span>
            </div>
            <div>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default Producto