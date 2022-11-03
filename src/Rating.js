import {React, useState, createContext, useContext} from "react";
import "./App.css"
import {Link} from "react-router-dom"
import Star from "./star.png"
import {GradeContext} from "./useContext"


function Rating(){

    const [nota, setNota] = useContext(GradeContext)
    

    return(
        <div id="root">
        <section className="card">
          <div className="spacer"></div>
          <div className="star">
            <img className="starImg" src={Star} alt="Estrela" />
          </div>
          <h1>Avalie o nosso serviço.</h1>
          <p >
            Por favor conte um pouco como foi sua experiência ao usar nosso
            serviço. Todo retorno é importante para nós melhorarmos!
          </p>
          <div className="ratingButtons">
            <div id="rating1" className={nota === "1" ? "ratingButton ratingButtonSelected" : "ratingButton"}  onClick={() => setNota("1")}>1</div>
            <div id="rating2" className={nota === "2" ? "ratingButton ratingButtonSelected" : "ratingButton"} onClick={() => setNota("2")}>2</div>
            <div id="rating3" className={nota === "3" ? "ratingButton ratingButtonSelected" : "ratingButton"} onClick={() => setNota("3")}>3</div>
            <div id="rating4" className={nota === "4" ? "ratingButton ratingButtonSelected" : "ratingButton"} onClick={() => setNota("4")}>4</div>
            <div id="rating5" className={nota === "5" ? "ratingButton ratingButtonSelected" : "ratingButton"} onClick={() => setNota("5")}>5</div>
          </div>
          <Link to="/thanks" id="confirmButton" className={nota == "0" ? "confirmButtonDisabled" : "confirmButton"}>
            AVALIAR
          </Link>
          <div className="spacer"></div>
        </section>
    </div>
    )
}

export default Rating;



