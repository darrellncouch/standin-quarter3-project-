import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/users.actions';

class Create extends Component{

  state={
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    vocals: false,
    lead_guitar: false,
    rhythm_guitar: false,
    accoustic_guitar: false,
    bass_guitar: false,
    drums: false,
    keys: false,
    synth: false
  }

  render(){
    return(
      <div>
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch =>{
//   return{
//     createAccount: bindActionCreators(actionCreators.createAccount, dispatch)
//   }
// }

export default connect(null, null)(Create);
