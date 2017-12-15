import ReactStars from 'react-stars'
import React, { Component }from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/users.actions';
import { render } from 'react-dom'
import { Collapse, Button, CardBody, Card, Row, Col, Badge } from 'reactstrap';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Badges from './Badges';

class List extends Component{
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render(){

    let {id, first_name, last_name, vocals, lead_guitar, rhythm_guitar, accoustic_guitar, bass_guitar, drums, keys, synth  } = this.props.musician

    let instArr =[];

    const instruments =()=>{

        if(vocals === true){
          instArr.push('Vocals')
        }
        if(lead_guitar === true){
          instArr.push('Lead Guitar')
        }
        if(rhythm_guitar === true){
          instArr.push('Rhythm Guitar')
        }
        if(accoustic_guitar === true){
          instArr.push('Accoustic Guitar')
        }
        if(bass_guitar === true){
          instArr.push('Bass Guitar')
        }
        if(drums === true){
          instArr.push('Drums')
        }
        if(keys === true){
          instArr.push('Keys')
        }
        if(synth === true){
          instArr.push('Synth')
        }

        return handleBadges()
    }

    const handleBadges = ()=>{
      return instArr.map(inst => {
        return(
          <Badges
            inst={inst}
          />
        )
      })
    }

    let reviews = this.props.reviews.map(review => review.user_id === id && <p>{review.content}</p> );


    return(
      <div>
        <Row>
          <Col>
            <div class="card border-secondary mb-3">
              <div class="card-header text-left no-pad ">
                <Row>
                  <Col sm={6}>
                    <Button color="secondary" onClick={this.toggle} className="marg-right-sm"> &#x25BC; </Button>
                   {first_name} {last_name}
                  </Col>
                  <Col sm={{size: 2, offset: 4 }}>
                    <Badge className="stars no-pad">
                      <ReactStars
                        value={this.props.musician.rating}
                        edit={false}
                        count={5}
                        size={18}
                        color2={'#f4c542'} />
                    </Badge>
                  </Col>
                </Row>

              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
                    <h5>Instruments:  {instruments()}</h5>
                    <h5>Reviews:</h5>
                    <Row>
                      <Col sm={12} className="scroll-y review-preview">
                        {reviews}
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={{size: 3, offset: 9}}>
                        <Link
                          to={`/musicians/hire/${id}`}
                          color='success'
                          className="marg-right-sm top-marg-sm float-right btn btn-success"
                        >Hire {first_name}
                        </Link>
                      </Col>
                    </Row>
                    </CardBody>
                  </Card>
                </Collapse>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}


const mapStateToProps = state =>{
  return{
    reviews: state.reviews
  }
}

export default connect(mapStateToProps, null)(List);
