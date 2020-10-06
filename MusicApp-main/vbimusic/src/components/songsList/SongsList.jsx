import React, { Component } from 'react';
import axios from 'axios'



class SongsList extends Component {
    constructor() {
        super();
        this.state={
            songs: []
        }

    }
    renderSongs() {
        if(this.state.songs == null)
            return null;

         return this.state.songs.map(song => {
             return (
                 <tr key={song.songtitle}>
                     <td>
                         {song.songtitle} <br/>
                         {song.singers} <br/>
                         {song.album}
                     </td>
                     <td>
                         {song.playtime}
                     </td>
                 </tr>
             );
         })
            // this.setState({ allSongs: res.data })



    }
    render() {
        return (
            <div>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th> Songs </th>
                                <th> Play Time </th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.renderSongs()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    shuffleArray = (array) => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    componentDidMount() {
        axios.get("http://localhost:4000/api/v1/songs").then(res => {
            this.setState({songs: res.data});
        });
    }

}

export default SongsList