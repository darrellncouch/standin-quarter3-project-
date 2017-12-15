import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './List';

class ElGtrList extends Component{

  render(){

    let userList = this.props.users && this.props.users.filter(user => user.lead_guitar === true).map(user => {
        return(
          <List
            key={user.id}
            musician={user}
          />
          )
      })

    return(
        <div className="top-marg-md scoll-y">
            {userList}
        </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    users: state.users
  }
}


export default connect(mapStateToProps, null)(ElGtrList);
