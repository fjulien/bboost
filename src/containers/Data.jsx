import React, { Component } from 'react';
import Category from './Category';
import { Button, Col, Row } from 'reactstrap';
import {Link} from 'react-router-dom'

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='Data'>
                <Row>
                    <Col sm='4'>
                        <Link to="category" params={{ type: "melanges" }}>Create Idea</Link>
                        <Button onClick={this.recherche} name="Carcinome" >Carcinome</Button>
                    </Col>
                    <Col sm='4'>
                        <Button onClick={this.recherche} name="Sarcome" >Sarcome</Button>
                    </Col>
                    <Col sm='4'>
                        <Button onClick={this.recherche} name="Myelome" >Myélome</Button>
                    </Col>
                </Row>
                <Row>
                    <Col sm='4'>
                        <Button onClick={this.recherche} name="ALeucemieutre" >Leucémie</Button>
                    </Col>
                    <Col sm='4'>
                        <Button onClick={this.recherche} name="Lymphome" >Lymphome</Button>
                    </Col>
                    <Col sm='4'>
                        <Button onClick={this.recherche} name="melanges" >Types mélangés</Button>
                    </Col>
                </Row>
                
                <Category
                    elements={this.props.elements}
                />
            </div>
        );
    }
}



export default Data;