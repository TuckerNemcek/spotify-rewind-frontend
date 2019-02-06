import React from "react"

const Track = (props) => (

  <tr>
    <th scope = "row"><img src = {props.track.track.album.images.length > 0 ? `${props.track.track.album.images[0].url}`:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"} alt="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" className = "track"/></th>
    <td>{props.track.track.name}</td>
    <td>{props.track.track.artists[0].name}</td>
    <td>
      <audio controls className="player">
        <source src={`${props.track.track.preview_url}`} type="audio/mp3"/>
      </audio>
        <div>
          <button className="playerBtnPlay" onClick={()=>{document.getElementsByClassName('player')[props.index].play()}}>Play</button>
          <button className="playerBtnPause" onClick={()=>{document.getElementsByClassName('player')[props.index].pause()}}>Pause</button>
        </div>
    </td>
  </tr>
)

export default Track
