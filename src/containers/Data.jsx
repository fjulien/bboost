import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import history from "../history";
import { getCategorie } from "../actions";

import './Data.css'

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    save(cat) {
        this.props.getCategorie(cat);
        history.push('/categorie');
    }

    render() {
        return (
            <div className='Data'>
                <Row className='ligneCat'>
                    <Col sm='4'>
                        <div className='elementCat' onClick={() => this.save('Carcinome')}>Carcinome</div>
                    </Col>
                    <Col sm='4'>
                        <div className='elementCat' onClick={() => this.save('Sarcome')}>Sarcome</div>
                    </Col>
                    <Col sm='4'>
                        <div className='elementCat' onClick={() => this.save('Myelome')}>Myélome</div>
                    </Col>
                </Row>
                <Row className='ligneCat'>
                    <Col sm='4'>
                        <div className='elementCat' onClick={() => this.save('Leucemie')}>Leucémie</div>
                    </Col>
                    <Col sm='4'>
                        <div className='elementCat' onClick={() => this.save('Lymphome')}>Lymphome</div>
                    </Col>
                    <Col sm='4'>
                        <div className='elementCat' onClick={() => this.save('Melanges')}>Mélangés</div>
                    </Col>

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

function mdtp(dispatch) {
    return bindActionCreators({ getCategorie }, dispatch)
}

export default connect(mstp, mdtp)(Data);