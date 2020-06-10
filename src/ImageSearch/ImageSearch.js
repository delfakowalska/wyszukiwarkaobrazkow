import React from "react"

import "./ImageSearch.css"

const ImageSearch = ({ handleGetRequest }) => {

    return(
        <div className="imageSearch">
            <form onSubmit={handleGetRequest} className="imageSearch__form">
                <input type="text" autoComplete="off" name="searchValue" placeholder="Szukaj obrazków..."/>
                <button>Szukaj</button>
            </form>
        </div>
    )
}

export default ImageSearch