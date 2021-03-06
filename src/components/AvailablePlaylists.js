import React, {Component} from 'react'
import Playlist from './Playlist'

export default class AvailablePlaylists extends Component {

  async componentDidMount(){
    this.props.compMount()
  }

  noPlaylists = () => {
    if (this.props.state.awaitingAvailable) {
      return (<div style={{width:'100%', marginTop:10, marginLeft:150}}><div className='fidget'></div></div>)
    }else{
      return (<div style={{width:'100%', marginTop:10, fontStyle:'italic'}} className='d-inline-flex p-2 justify-content-center'><h4>You have no playlists to back up!</h4></div>)
    }
  }

  render(){
    return(
      <div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-2"></div>
          <div className = "col-6"><h3>Choose a playlist you want to backup</h3></div>
          <div className="col-2"></div>
        </div>
        <div className='playlist-container col-8 offset-md-4'>
          {this.props.state.playlists.length > 0 && !!this.props.state.playlists[0].id ?this.props.state.playlists.map((playlist,i)=><Playlist key={i} playlist = {playlist} detail = {this.props.compMountDetailed} select={this.props.selectPlaylist}/>):this.noPlaylists()}
        </div>
      </div>
    )
  }
}
