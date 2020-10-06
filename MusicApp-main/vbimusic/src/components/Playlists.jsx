import React, { Component } from 'react';
import axios from 'axios'

class Playlist extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: '',
            showModal: false

        }
    }

    onInputChange(e){
        this.setState({inputValue: e.target.value})

    }

    createPlaylist(){
        let username = window.location.pathname.substring(9)
        axios.post("http://localhost:4000/api/v1/playlist", {username: username, playlist_name: this.state.inputValue}).then(res => {
            console.log(res);
        }).catch(err => {
            alert(err.response?.data?.message);
        });
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
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <input style={{marginRight: '20px'}}onChange={(e) => this.onInputChange(e)} value={this.state.inputValue}></input>
                    <button className="create-playlist-button" onClick={()=>{this.createPlaylist()}}><b>Create Playlist</b></button>
                </div>
            </div>
        );
    }
}

export default Playlist