import React, { ReactNode } from "react";
import './styles.css'

const Card : React.FC<{children: ReactNode}> = ({children}) =>{
    return(
        <div className="container-card">
            {children}
        </div>
    )
}

export default Card