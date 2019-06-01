import React, { Component } from "react"
import {Link} from 'react-router-dom'
export default class Veiwpage extends Component{
   render(){
       console.log(this.props.match)
       return(
           <div>
               <Link to={`/AddDetailsPage/${this.props.match.params.id}`}>{this.props.match.params.id}</Link>
               {/* <Link to={`/AddDetailsPage/${this.props.match.params.id}`}/> */}
           </div>
       )
   }
}
