import React from "react"
import ImageSearch from "./ImageSearch/ImageSearch"
import ImageList from "./ImageList/ImageList"

const API_KEY = "16928101-e291a6c82337830ba4ff6c393"

class App extends React.Component {

  state = {
    images: [],
    error: null
  }

  handleGetRequest = async (e) => {
    e.preventDefault()
    const searchTerm = e.target.elements.searchValue.value
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`
    const request = await fetch(url)
    const response = await request.json()
    if (!searchTerm) {
      this.setState({ error: "Wprowadź hasło do wyszukiwarki." })
    } else {
      this.setState({ images: response.hits, error: null })
    }
    
  }

  render() {
    return (
      <div>

        <ImageSearch handleGetRequest={this.handleGetRequest}/>
        {
          this.state.error !==null ?
        <div style={{color:"#fff", textAlign:"center"}}>{ this.state.error }</div> :
        <ImageList images={this.state.images} />
        }
        


      

      </div>
    );
  }
}

export default App