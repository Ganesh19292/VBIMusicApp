import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SongsList from '../songsList/SongsList'


// Welcome page
class WelcomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSongList: true,
            showPlayList: false
        }
    }

    renderHelper(){
        if(this.state.showSongList == true)
            return <SongsList />
        else if(this.state.showPlayList == true)
            return <Playlist />
    }

    render() {
        return (
            <div>{/*<h1>Welcome {this.props.match.params.name}</h1>*/}
                <nav className="navbar justify-content-center navbar-dark bg-primary">
                    <div className="navbar-brand">
                        <button className="buttontab" onClick={() => {this.setState({showSongList: true, showPlayList: false})}}><b>All Songs</b></button> &nbsp;
                        <button className="buttontab" onClick={() => {this.setState({showSongList: false, showPlayList: true})}}><b>Playlist</b></button></div></nav>
                {this.renderHelper()}
            </div>
        );
    }
}



class Playlist extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="container">
                <table className="table" >
                    <thead>
                        <tr>
                            <th> Playlists </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            /*  this.state.SongsList.map*/
                            <tr>
                                {/*insert songs through json */}
                                <td>{/*songs.name <br/>singers<br/> album<br/>*/}</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default WelcomePage