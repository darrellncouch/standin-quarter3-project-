import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from  'react-router-dom';

class Hire extends Component{

  state={
    hired: false
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({hired: true})
  }




  render(){

      let singleUser = this.props.users && this.props.users.find(user => user.id == this.props.match.params.id  );

      let instArr = [];

      const instruments =()=>{

          if(singleUser && singleUser.vocals === true){
            instArr.push('Vocals')
          }
          if(singleUser && singleUser.lead_guitar === true){
            instArr.push('Lead Guitar')
          }
          if(singleUser && singleUser.rhythm_guitar === true){
            instArr.push('Rhythm Guitar')
          }
          if(singleUser && singleUser.accoustic_guitar === true){
            instArr.push('Accoustic Guitar')
          }
          if(singleUser && singleUser.bass_guitar === true){
            instArr.push('Bass Guitar')
          }
          if(singleUser && singleUser.drums === true){
            instArr.push('Drums')
          }
          if(singleUser && singleUser.keys === true){
            instArr.push('Keys')
          }
          if(singleUser && singleUser.synth === true){
            instArr.push('Synth')
          }

          return handleDropDown()
      }

      const handleDropDown = ()=>{
        return instArr.map(inst => <option>{inst}</option> )
      }


    return(
      <div className="top-marg-sm bottom-marg-lg">
        <Row>
          <Col sm={{size:10, offset: 1}} className="top-marg-lg">
            {
              this.state.hired === true
              ? <div>
                  <div class="alert alert-dismissible alert-success">
                    <h4 class="alert-heading">Success!</h4>
                    <h6 class="mb-0">hire request sent!</h6>
                  </div>
                  <Row>
                    <Col sm={12}>
                      <Link to={'/musicians/vocals'} class="btn btn-primary btn btn">Return to Home</Link>
                    </Col>
                  </Row>
                </div>
            :<div>
             <h2>Stand In Agreement</h2>
                 <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <fieldset>
                      <Row className="top-marg-md">
                        <Col sm={6}>
                          <div class="form-group">
                            <fieldset disabled="">
                              <label class="control-label" for="disabledInput">First Name</label>
                              <input class="form-control" id="disabledInput" type="text" placeholder={singleUser && singleUser.first_name} disabled={true}/>
                            </fieldset>
                          </div>
                        </Col>
                        <Col sm={6} className="bottom-marg-md">
                          <div class="form-group">
                            <fieldset disabled="">
                              <label class="control-label" for="disabledInput">Last Name</label>
                              <input class="form-control" id="disabledInput" type="text" placeholder={singleUser && singleUser.last_name} disabled={true} />
                            </fieldset>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={6} >
                          <div class="form-group">
                            <label for="exampleSelect2">Instrument</label>
                            <select multiple="" class="form-control" id="exampleSelect2">
                              {instruments()}
                            </select>
                          </div>
                        </Col>
                        <Col sm={6} className="bottom-marg-md">
                          <div class="form-group">
                            <label class="control-label">Offer</label>
                            <div class="form-group">
                              <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
                              <div class="input-group">
                                <div class="input-group-addon bg-success">$</div>
                                <input type="text" class="form-control" id="exampleInputAmount" placeholder="Amount" />
                                <div class="input-group-addon">.00</div>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={12} className="bottom-marg-sm">
                          <div class="form-group">
                            <label for="exampleTextarea">Message</label>
                            <textarea class="form-control" id="exampleTextarea" rows="8"></textarea>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={12}>
                          <button type="submit" class="btn btn-success btn-block">Hire {singleUser && singleUser.first_name} {singleUser && singleUser.last_name}!</button>
                        </Col>
                      </Row>
                    </fieldset>
                  </form>
                </div>
              }

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

export default connect(mapStateToProps, null)(Hire);
