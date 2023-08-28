import React from "react";
import './App.css';
import buscadorIcon from './buscador.svg'
import { useEffect, useState } from "react";
import TarjetaPelicula from "./tarjetaPelicula";

const Api_Url = 'https://www.omdbapi.com/?apikey=9bb82c7c';

const App = ()=>{
    const [movies,setMovies] = useState([])
    const [busquedaParam, setBusquedaParam] = useState('')
    const buscadorCine = async (titulo)=>{
        const response = await fetch(`${Api_Url}&s=${titulo}`);
        const data = await response.json();
        setMovies(data.Search);
        console.log(data.Search);
    }
    useEffect(()=>{
        buscadorCine('spiderman')
    },[])
    console.log("las peliculassssss-----", movies);
    return (
        <div className="app">
            <h1>Cine Colombia</h1>
            <div className="busqueda">
                <input type="text" placeholder="Buscador de peliculas" value={busquedaParam} onChange = {(e)=>setBusquedaParam(e.target.value)} oninput={()=>buscadorCine(busquedaParam)} />
                <img src={buscadorIcon} alt="buscar" onClick={()=>buscadorCine(busquedaParam)} />
            </div>
            {movies?.length >0 ? (
                <div className="contenedor">{
                        movies.map((movie)=>(
                            <TarjetaPelicula movie1 = {movie}/>
                        ))
                    }
                </div>
            ):(
                <div className="empty">
                    <h2>No se encontraron Peliculas</h2>
                </div>
            )}
        </div>
        )
}

export default App