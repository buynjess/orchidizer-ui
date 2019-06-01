import React, { Component } from "react"
import {Link} from "react-router-dom"

export default class Main extends Component{
   

    componentDidMount() {
        fetch("http://localhost:4001/")
        .then(response => response.json())
        .then(plants => {
            console.log('got plants: ', plants)
            this.setState({
                plants
            })
        })
    }

    render(){
        return(
            <div>
                <div className="upper-icon">
                    <h1>ORCHIDIZER</h1>
                    <img className="image"  src="" alt="orchid"/>
                </div>
                <div className="buttons">
                
                {this.state.plants.map(({ name, genre }) => <Link to={`/orchid/${name}`}><button >{`${name} (${genre})`}</button></Link>)}
            
                </div>
            </div>
        )
    }
}
    


// import React, { Component } from "react"
// import {Link} from "react-router-dom"

// export default class Main extends Component{
//     render(){
//         return(
//             <div>
//                 <div className="upper-icon">
//                     <h1>ORCHIDIZER</h1>
//                     <img className="image"  src="" alt="orchid"/>
//                 </div>
//                 <div className="buttons">
//                 <Link to="/orchid/dendrobium"><button >Dendrobium</button></Link>
//                 <Link to="/orchid/cattleya"><button >Cattleya</button></Link>
//                 <Link to="/orchid/oncidum"><button >Oncidium</button></Link>
//                 <Link to="/orchid/phalenopsis"><button >Phalenopsis</button></Link>
//                 <Link to="/orchid/other"><button >Other</button></Link>  
//                 <Link to="/orchid/wishList"><button >Wish List</button></Link>
//                 <Link to="/orchid/death"><button >Death</button></Link>
//                 <Link to="/orchid/create"><button >Create</button></Link>       
//                 </div>
//             </div>
//         )
//     }
// }
    