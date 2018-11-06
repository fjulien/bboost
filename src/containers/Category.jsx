import React, { Component } from 'react';
import CardElement from '../components/CardElement';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }



    render() { 
        return ( 
            <div className='Category'>
                <Row>
                    {console.log("la")}
                    {this.props.elements.filter(element => element.mot_clef === this.props.filtre).map(element =>
                        <Col sm='3'>
                            <CardElement
                                image={element.image}
                                title={element.title}
                                description={element.description}
                            />
                        </Col>
                    )
                    }
                </Row>
            </div>
         );
    }
}

function mstp(state) {
    return {
        elements: state.elements,
    }
}
 
export default connect(mstp)(Category);