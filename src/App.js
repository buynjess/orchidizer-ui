import React, { Component } from 'react'
import Main from './Main'
import { Switch, Route} from 'react-router-dom'
import './App.css'
import AddDetailsPage from './AddDetailsPage'
import Veiwpage from './VeiwPage'

class App extends Component {

  state = { name:"", genre:"", imgurl:"", alarms:"", notes:"", redirect:false}
  state = {
    plants: []
}
  savePlant = () => {

  }


  renderAddDetailsPage = () =>{
    return(
      <div>
        <AddDetailsPage/>
      </div>
    )
  }

  renderVeiwPage = () => {
    return(
      <div>
        <Veiwpage/>
      </div>
    )
  }

  render() {

    return (
      <div> 
            <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/AddDetailsPage/:id" component={AddDetailsPage}/>
            <Route exact path="/orchid/:id" component={Veiwpage}/>
            </Switch>
        </div>
    )
  }
}

export default App;
