import React, { Component } from "react"

export default class AddDetailsPage extends Component{

    savePlant(event){
        event.preventDefault()
        const newPlant = {

        }
    }
    state = {plant:{name:"", genre:"", imgurl:"", browse:"", alarms:"", notes:"", save:""}}

    render(){
        return(
            <div>
                <form>
                    Name: <input onChange={(e)=>{
                        this.setState({name:e.target.value})
                    }}type="text" vaule={this.state.name}/>
                    <br/>
                    Genre:<input onChnage={(e)=> {
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
                <form>
                    Notes:
                    <textarea>Enter notes or description here</textarea>
                    <br/>
                    <button>Save</button>
                </form>
            </div>
        )
    }
}
   