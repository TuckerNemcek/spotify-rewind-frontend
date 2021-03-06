import React from "react"

const Track = (props) => (

  <tr>
    {!props.bool?<th scope = "row"><img src = {props.track.track.album.images.length > 0 ? `${props.track.track.album.images[0].url}`:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"} alt="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" className = "track"/></th>:<th scope = "row"><img src = {props.track.cover !== "" ? `${props.track.cover}`:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"} alt="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" className = "track"/></th>}
    <td>{props.bool?props.track.name:props.track.track.name}</td>
    <td>{props.bool?props.track.artist:props.track.track.artists[0].name}</td>
  </tr>
)

export default Track
