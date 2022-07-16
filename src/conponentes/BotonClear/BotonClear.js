import React from "react";
import"./BotonClear.css"
function BotonClear({ children }){
    return(
        <div className="botonClear">
            { children }

        </div>
    );
}
export default BotonClear;