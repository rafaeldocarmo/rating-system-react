import {React, useState} from "react";
import "./App.css"
import {Link, UNSAFE_RouteContext} from "react-router-dom"
import Star from "./star.png"
import {GradeContext} from "./useContext"



function Rating(){
    const [nota, setNota] = useState(GradeContext)

    let rating = 0;
    if(rating !== "0"){
      document.getElementById('rating' + rating).classList.remove("ratingButtonSelected");
    }
    rating = nota;
    document.getElementById('rating' + rating).classList.add("ratingButtonSelected");
    
    return(
        <body id="root">
        <section className="card">
          <div className="spacer"></div>
          <div className="star">
            <img className="starImg" src={Star} alt="Estrela" />
          </div>
          <h1>Avalie o nosso serviço.</h1>
          <p>
            Por favor conte um pouco como foi sua experiência ao usar nosso
            serviço. Todo retorno é importante para nós melhorarmos!
          </p>
          <div className="ratingButtons">
            <div id="rating1" className="ratingButton" onClick={() => setNota("1")}>1</div>
            <div id="rating2" className="ratingButton" onClick={() => setNota("2")}>2</div>
            <div id="rating3" className="ratingButton" onClick={() => setNota("3")}>3</div>
            <div id="rating4" className="ratingButton" onClick={() => setNota("4")}>4</div>
            <div id="rating5" className="ratingButton" onClick={() => setNota("5")}>5</div>
          </div>
          <Link to="/thanks" id="confirmButton" className={nota == "0" ? "confirmButtonDisabled" : "confirmButton"}>
            AVALIAR
          </Link>
          <div className="spacer"></div>
        </section>
    </body>
    )
}

export default Rating;