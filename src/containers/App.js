import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/users.actions';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import Topnav from '../components/Topnav';
import Splash from '../components/Splash';
import NotFound from '../components/NotFound';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Hire from '../components/Hire';
import Login from '../components/Login';
import Create from '../components/Create';
import Edit from '../components/Edit';



class App extends Component {

  state={
    loggedin: false,
    user_id: ''
  }


  componentDidMount(){
    this.props.getUsers();
    this.props.getReviews();
  }

  handleLogin =(id)=>{
    this.setState({
      loggedin: true,
      user_id: id
    })
  }


  render() {

    let findUser = this.props.users && this.props.users.find(user => user.id == this.state.user_id)
    console.log("findUser: ", this.props.users && findUser);

    return (
      <Router>
        <div className="App bkgnd">
          <Topnav
            user={this.props.users}
            appState={this.state}
           />
            <Switch>
              <Route exact path="/" component={Splash}/>
              <Route path="/musicians" exact render={({...props})=> <Main {...props} loggedIn={this.state}/>}/>
              <Route path='/login' exact render={({...props})=> <Login {...props} loggedin={this.state.login} handleLogin={this.handleLogin}/>}/>
              <Route path="/create-account" exact component={Create}/>
              <Route path="/edit-account" exact render={({...props})=> <Edit {...props} thisUser={this.props.users && this.props.users.find(user => user.id == this.state.user_id)}/>}/>
            </Switch>

        </div>
      </Router>
    );
  }
}

const mapStateToProps = state =>{
  return{
    users: state.users
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    getUsers: bindActionCreators(actionCreators.getUsers, dispatch),
    getReviews: bindActionCreators(actionCreators.getReviews, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
