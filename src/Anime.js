import React, { Component } from "react";

class Anime extends Component {
    render() {
        return(
            <div className="animeLinks">
                <h1>Anime Titles</h1>
                    <ul>
                        <li className="bleachAnime">Bleach</li>
                        <li className="narutoAnime">Naruto</li>
                        <li className="borutoAnime">Boruto</li>
                        <li className="aotAnime">Attack on Titan</li>
                        <li className="oneAnime">One Piece</li>
                        <li className="fairyAnime">Fairy Tale</li>
                        <li className="dbsAnime">DB Super</li>
                        <li className="inuyashaAnime">Inuyasha</li>
                    </ul>
            </div>
        )
    }
        
}


export default Anime