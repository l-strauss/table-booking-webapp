import React from "react"

const Header = ({children}) => {
    return (
        <div className="header">
            <img src="\Logo.svg" alt="Logo"></img>
            {children}
        </div>

    )
}

export default Header