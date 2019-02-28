import React, { Component } from "react"
import Redirect from "react-router-dom"

export default class AddDetailsPage extends Component{

     savePlant = async () => {
         console.log(this.props)
        // event.preventDefault()
        const newPlant = {
            type: await this.props.match.params.id,
            name:this.state.name,
            genre:this.state.genre,
            imgurl:this.state.imgurl,
            alarms:this.state.alarms,
            notes:this.state.notes,
        }
        console.log(newPlant)

        const resp = await fetch (`http://localhost:4001`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPlant)
        })

        const newPlants =await resp.json()
        console.log(newPlants)
        this.setState({plants: newPlants })
    }
    state = { name:"", genre:"", imgurl:"", alarms:"", notes:"", redirect:false}

    render(){
    
        return(
            <div>
                <form>
                    Name: <input onChange={(e)=>{
                        this.setState({name: e.target.value})
                    }}type="text" vaule={this.state.name}/>
                    <br/>
                    Genre:<input onChange={(e)=> {
                        this.setState({genre: e.target.value})
                    }}type="text" value={this.state.genre}/>
                </form>
                <picture>
                    Image:<input onChange={(e)=> {
                        this.setState ({imgurl: e.target.value})
                    }}type="link" value={this.state.imgurl}/>
                    {/* <button>Browse</button> */}
                </picture>
                {/* <section>
                    Alarm Modal
                </section> */}
                <form onSubmit={(e)=> {e.preventDefault(); this.savePlant()}}>
                {/* <form> */}
                    Notes:
                    <textarea></textarea>
                    <br/>
                    {/* <button onClick={this.savePlant}>Save</button> */}
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}
   