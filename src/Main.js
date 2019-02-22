import React, { Component } from "react"
import {Link} from "react-router-dom"

export default class Main extends Component{
    render(){
        return(
            <div>
                <div className="upper-icon">
                    <h1>ORCHIDIZER</h1>
                    <img className="image"  src="" alt="orchid"/>
                </div>
                <div className="buttons">
                <Link to="/flower/dendrobium"><button >Dendrobium</button></Link>
                <Link to="/flower/dendrobium"><button >Cattleya</button></Link>
                <Link to="/flower/dendrobium"><button >Oncidium</button></Link>
                <Link to="/flower/dendrobium"><button >Phalenopsis</button></Link>
                <Link to="/flower/dendrobium"><button >Other</button></Link>  
                <Link to="/flower/dendrobium"><button >Wish List</button></Link>
                <Link to="/flower/dendrobium"><button >Death</button></Link>
                <Link to="/flower/dendrobium"><button >Create</button></Link>       
                </div>
            </div>
        )
    }
}
    