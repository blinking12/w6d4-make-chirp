//Code Collin put online

import React from 'react'

class PhotoDisplayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    // var photos = [
    //   {photo: 'http://unsplash.it/600?random', caption: 'Testing 123'},
    // ]
    //
    // this.setState({
    //   photos: photos
    // })
    fetch('https://9326a318.ngrok.io/photos')
    .then(response => response.json())
    .then((response) => {

      // console.log(response)

      this.setState({
        photos: response.photos
      })

    })
  }

  render() {
    var photos = this.state.photos.map((photo, i) => {
      return <div className="photo">
        <img src={'https://9326a318.ngrok.io' + photo.photo} alt={photo.caption} />
        <span>{photo.caption}</span>
      </div>
    })

    return <div id="photoGrid">
      {photos}
    </div>
  }
}

export default PhotoDisplayer








//Code I worked on in class.
// import React from 'react'
//
// class PhotoDisplayer extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             photos: []
//         }
//     }
// }
//
// componentDidMount() {
//     fetch('https://9326a318.ngrok.io/photos')
//     .then(response => response.json())
//     .then((response) => {
//         this.setState({
//             photos: response.photos
//         })
//     })
// }
//
// render() {
//     var photos = this.state.photos.map((photo, i) => {
//         return <div className="photo">
//             <img src={'https://9326a318.ngrok.io/' + photo.photo} alt={photo.caption} />
//             <span>{photo.caption}</span>
//         </div>
//     })
// }
//
// const PhotoDisplayer = (props) => {
//     return <div id="photoGrid">
//     <div id="photoGrid">
//         <div class="photo">
//             <img src="http://unsplash.it/600?random" alt="Randomness" />
//             <span>Randomness</span>
//         </div>
//     </div>
//     </div>
// }
//
// export default PhotoDisplayer
