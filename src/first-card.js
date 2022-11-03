import {React, useState, createContext, useContext} from "react";
import './App.css'
import {Link} from "react-router-dom"
import {GradeContext} from "./useContext"

function Avaliacao(){
    const [nota, setNota] = useContext(GradeContext)
    return(
    <body>
        <section className="card">
            <div className="spacer"></div>
            <h3 id="message">
            {nota === "" ?
             "Você ainda não avaliou nossos serviços, clique no botão a seguir para fazer sua avaliação." :
                 "Obrigado por avaliar nosso serviço, se desejar pode alterar sua avaliação"}
            </h3>
            <div className="ratingDisplay">
            Nota: {nota}
            <div id="rating"></div>
            </div>
            <Link to="/rating" className="confirmButton">
            Avaliar
            </Link>
            <Link to="/" className="backButton" onClick={() => setNota("")}>Remover avaliação</Link>
            <div className="spacer"></div>
        </section>
    </body>
    )
}



export default Avaliacao;