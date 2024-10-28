import React from "react";
import "./style.css"

const ProjetoModal = ({show, setShow}) => {
    return (
        <div style={{display: (show == true ? "flex" : "none")}} className="PMContainer">
            <button onClick={() => setShow(!show)}>X</button>
            <h1>aaa</h1>
        </div>
    );
}

export default ProjetoModal;