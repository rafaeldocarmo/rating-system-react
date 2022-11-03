import {React, useState, createContext, useContext} from "react";
import './App.css'
import {Link} from "react-router-dom"
import feedback from './feedback.png'
import {GradeContext} from "./useContext"

function Thanks(){

    const nota = useContext(GradeContext)

    return(
    <body id="root">
        <section class="card">
            <div class="spacer"></div>
            <img src={feedback} alt="feedback" />
            <h1 className="obrigado">Obrigado!</h1>
            <div class="ratingDisplay">Você deu a nota {nota} de 5</div>
            <p className="agradecimento">
            Estamos felizes e agradecidos por usar parte do seu tempo para dar sua opinião. Se precisar de ajuda futuramente pode
            nos procurar!
            </p>
            
            <Link to="/" id="backButton" class="backButton" onclick="confirmRating()">
            Confirmar Avaliação
            </Link>
            <div class="spacer"></div>
        </section>
    </body>
    )
}

export default Thanks;