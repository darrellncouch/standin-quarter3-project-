import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Col} from 'reactstrap'
import List from './List';

class VocalistList extends Component{

  render(){

    let userList = this.props.users && this.props.users.filter(user => user.vocals === true).map(vocalist => {
        return(
          <List
            key={vocalist.id}
            musician={vocalist}
          />
          )
      })

    return(
        <div className="top-marg-md scoll-y">
          <Col sm={11}>
            {userList}
          </Col>
        </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    users: state.users
  }
}


export default connect(mapStateToProps, null)(VocalistList);
