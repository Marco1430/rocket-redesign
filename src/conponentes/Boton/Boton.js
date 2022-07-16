import React from "react";
import"./Boton.css"
function Boton({ children }){
    return(
        <div className="boton_cal">
            { children }

        </div>
    );
}
export default Boton;