import React, { Component } from 'react';
import CardElement from '../components/CardElement';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='Category'>
                <Row>
                    <Col sm='12'>
                        <h2>
                            {this.props.filter.categorie}
                        </h2>
                    </Col>
                </Row>
                <Row>
                    {console.log(this.props)}
                    {this.props.elements.filter(ele => ele.mot_clef === this.props.filter.categorie).map(element =>
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
        filter: state.filtre,
    }
}

export default connect(mstp)(Category);