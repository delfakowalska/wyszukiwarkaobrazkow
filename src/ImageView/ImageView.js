import React from "react"
import "./ImageView.css"

import { Link } from "react-router-dom"

const ImageView = (props) => {
    console.log(props.location.state.image)
    const { largeImageURL: image, user: owner, tags, pageURL } = props.location.state.image
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="imageView__container">
              <img src={image} alt={tags} className="imageView__img img-responsive" />
              <div className="imageView__copyright">
                <p>&copy;pixabay</p>
              </div>
              <div className="imageView__text">
                <h4>Autor: <span>{owner}</span></h4>
                <h4>Pobierz: <span><a target="blank" href={pageURL }>{ pageURL.substring(0, 10) }...[Kliknij, by pobrać]]</a></span></h4>
                <button className="active-recipe__button">
                  <Link to="/">Strona Główna</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
export default ImageView