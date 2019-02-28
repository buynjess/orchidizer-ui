import React, { Component } from "react"

export default class AddDetailsPage extends Component{

    async savePlant(){
        // event.preventDefault()
        const newPlant = {
            name:this.state.preName,
            genre:this.state.preGenre,
            imgurl:this.state.preImgurl,
            browse:this.state.preBrowse,
            alarms:this.state.preAlarms,
            notes:this.state.preNotes,
            save:this.state.preSave
        }

        const resp = await fetch ('http://localhost:4001/',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPlant)
        })

        const newPlants =await resp.json()
        this.setState({plants: newPlants })
    }
    state = {plant:{ preName:"", preGenre:"", preImgurl:"", preBrowse:"", preAlarms:"", preNotes:"", preSave:"", plants:[]}}

    render(){
        return(
            <div>
                <form>
                    Name: <input onChange={(e)=>{
                        this.setState({name:e.target.value})
                    }}type="text" vaule={this.state.name}/>
                    <br/>
                    Genre:<input onChange={(e)=> {
                        this.setState({genre:e.target.value})
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
                    <button onClick={this.savePlant}>Save</button>
                    {/* <button type="submit">Save</button> */}
                </form>
            </div>
        )
    }
}
   