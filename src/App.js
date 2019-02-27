import React, { Component } from 'react';
import Main from './Main';
import { Switch, Route} from 'react-router-dom'
import './App.css'
import AddDetailsPage from './AddDetailsPage';
import Veiwpage from './VeiwPage';

class App extends Component {
  
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
            <Route exact path="/flower/:id" component={Main} />
            <Route exact path="/AddDetailsPage" component={AddDetailsPage}/>
            </Switch>
        </div>
    )
  }
}

export default App;
