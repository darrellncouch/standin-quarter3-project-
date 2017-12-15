import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/users.actions';
import { Row, Col } from 'reactstrap';


class Edit extends Component{


  state={
    first_name: this.props.thisUser && this.props.thisUser.first_name,
    last_name: this.props.thisUser && this.props.thisUser.last_name,
    email: this.props.thisUser && this.props.thisUser.email,
    vocals: this.props.thisUser && this.props.thisUser.vocals,
    lead_guitar: this.props.thisUser && this.props.thisUser.lead_guitar,
    rhythm_guitar: this.props.thisUser && this.props.thisUser.rhythm_guitar,
    accoustic_guitar: this.props.thisUser && this.props.thisUser.accoustic_guitar,
    bass_guitar: this.props.thisUser && this.props.thisUser.bass_guitar,
    drums: this.props.thisUser && this.props.thisUser.drums,
    keys: this.props.thisUser && this.props.thisUser.keys,
    synth: this.props.thisUser && this.props.thisUser.synth
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateAccount(this.props.thisuser.id, this.state)
  }

  render(){

    console.log('edit page props: ', this.props);
    return(
      <div>
        <h3 className="top-marg-lg">Edit Account Info</h3>
        <Row>
          <Col className="top-marg-sm" sm={{size: 10, offset:1}}>
            <form onSubmin={this.handleSubmit}>
              <Row>
                <Col sm={6}>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.first_name}
                    onChange={(e)=>this.setState({first_name: e.target.value})}
                  />
                </Col>
                <Col sm={6}>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.last_name}
                    onChange={(e)=>this.setState({last_name: e.target.value})}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12} className="top-marg-sm">
                  <input
                    type="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={(e)=>this.setState({email: e.target.value})}
                  />
                </Col>
              </Row>
              <h4 className="top-marg-sm">Instruments played</h4>
              <Row>

                <Col sm={1} className="top-marg-sm">
                  <div className="form-group">
                    <input
                      className=""
                      type="checkbox"
                      checked={this.state.vocals}
                      onChange={(e)=> this.setState({vocals: e.target.value})}
                    /><p className="marg-right-sm">Vocals</p>
                  </div>
                </Col>
                <Col sm={2} className="top-marg-sm">
                    <div className="form-group">
                      <input className="" type="checkbox"  onChange={(e)=> this.setState({lead_guitar: e.target.value})} checked={this.state.lead_guitar} /><p className="marg-right-sm">Lead Guitar</p>
                    </div>
                </Col>
                <Col sm={2} className="top-marg-sm">
                    <div className="form-group">
                      <input className="" type="checkbox"  onChange={(e)=> this.setState({rhythm_guitar: e.target.value})} checked={this.state.rhythm_guitar } /><p className="marg-right-sm">Rhythm Guitar</p>
                    </div>
                </Col>
                <Col sm={2} className="top-marg-sm">
                    <div className="form-group">
                      <input className="" type="checkbox" onChange={(e)=> this.setState({accoustic_guitar: e.target.value})} checked={this.state.accoustic_guitar } /><p className="marg-right-sm">Accoustic Guitar</p>
                    </div>
                </Col>
                <Col sm={2} className="top-marg-sm">
                    <div className="form-group">
                      <input className="" type="checkbox"  onChange={(e)=> this.setState({bass_guitar: e.target.value})} checked={this.state.bass_guitar } /><p className="marg-right-sm">Bass Guitar</p>
                    </div>
                </Col>
                <Col sm={1} className="top-marg-sm">
                    <div className="form-group">
                      <input className="" type="checkbox"   onChange={(e)=> this.setState({drums: e.target.value})} checked={this.state.drums } /><p className="marg-right-sm">Drums</p>
                    </div>
                </Col>
                <Col sm={1} className="top-marg-sm">
                    <div className="form-group">
                      <input className="" type="checkbox"  onChange={(e)=> this.setState({keys: e.target.value})} checked={this.state.keys } /><p className="marg-right-sm">Keys</p>
                    </div>
                </Col>
                <Col sm={1} className="top-marg-sm">
                    <div className="form-group">
                      <input className="" type="checkbox"   onChange={(e)=> this.setState({synth: e.target.value})} checked={this.state.synth } /><p className="marg-right-sm">Synth</p>
                    </div>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <input type="submit" className="btn btn-block btn-success" value="save Changes"/>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return{
    users: state.users
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    updateAccount: bindActionCreators(actionCreators.updateAccount, dispatch)
  }
}

export default connect(mapStateToProps, null)(Edit);
