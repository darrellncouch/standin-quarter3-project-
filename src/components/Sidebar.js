import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, } from 'reactstrap';

class Sidebar extends Component{

  state ={
    vox_selected: false,
    elGtr_selected: false,
    rthmGtr_selected: false,
    accGtr_selected: false,
    bass_selected: false,
    drum_selected: false,
    keys_selected: false,
    syn_selected: false
  }
  render(){
    return(
      <div className="">
        <Row>
          <Col sm={12}>
            <h3 className="top-marg-md bottom-marg-md"> What are you looking for? </h3>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="no-pad">
            <div className="list-group bottom-marg-lg ">
              <Link
                to={'/musicians/vocals'}
                className={`list-group-item list-group-item-action text-left menu-item sidebar ${
                  this.state.vox_selected === true && 'active'
                }`
                // onClick={this.handleMenuClick()}
              }>
                Vocals
              </Link>
              <Link to={'/musicians/lGuitar'} className="list-group-item list-group-item-action  text-left menu-item sidebar">Lead Guitar </Link>
              <Link to={'/musicians/rGuitar'} className="list-group-item list-group-item-action text-left menu-item sidebar">Rhythm Guitar </Link>
              <Link to={'/musicians/aGuitar'} className="list-group-item list-group-item-action  text-left menu-item sidebar">Accoustic Guitar </Link>
              <Link to={'/musicians/bGuitar'} className="list-group-item list-group-item-action text-left menu-item sidebar">Bass Guitar </Link>
              <Link to={'/musicians/drum'} className="list-group-item list-group-item-action  text-left menu-item sidebar">Drums </Link>
              <Link to={'/musicians/keys'} className="list-group-item list-group-item-action text-left menu-item sidebar">Keys </Link>
              <Link to={'/musicians/synth'} className="list-group-item list-group-item-action  text-left menu-item sidebar">Synth </Link>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Sidebar;
