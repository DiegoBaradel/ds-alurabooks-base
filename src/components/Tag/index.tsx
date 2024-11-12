import React from "react"
import './styles.css'

const Tag:React.FC<{children:string}> = ({children}) =>{
    return(
        <h3 className="tag">{children}</h3>
    )
}

export default Tag