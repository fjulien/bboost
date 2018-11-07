import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Tabs from './Tabs';

import "./Aide.css";


class Aide extends Component {
  render() {
    return (
      <div className="pt-4 logosCommentMarche fondHow ">

        <Container>
          <Row>
            <Col sm={{ size: 10, offset: 1 }} className="text-center mt-5 mb-5">   
                <div>
                  <h1 className="titreHow text-center pb-5 pt-5" >How it works ?</h1>
                </div>
            </Col>
          </Row>
        </Container>

        <Container fluid >
          <Row style={{ backgroundColor: 'rgb(56, 71, 160)', borderColor: 'rgb(56, 71, 160)', color: '#FFFFFF' }}>
            <Col sm={{ size: 12 }} className="text-center mt-5 mb-5">
              <h3 className="">Simply load, select and view your Datas</h3>
            </Col>
          </Row>

          <Row style={{ backgroundColor: 'rgb(56, 71, 160)', borderColor: 'rgb(56, 71, 160)', color: '#FFFFFF' }}>
            <Col sm={{ size: 2, offset: 2 }} className="text-center pl-3 mt-5 mb-5">
            <img src="/images/downloadFile.svg" alt="Téléchargement Data" width={55} />
              <p>Upload your data</p>
            </Col>
            <Col sm={{ size: 2, offset: 1 }} className="text-center mt-5 mb-5">
            <img src="/images/search.svg" alt="Sélection Data" width={55} />
              <p>Select your data</p>
            </Col>
            <Col sm={{ size: 2, offset: 1 }} className="text-center pr-3 mt-5 mb-5">
              <img src="/images/analytics.svg" alt="Visualisation Data" width={60} />
              <p>Visualize your data</p>
            </Col>
          </Row>

          <Row>
            <Col sm={{ size: 4, offset: 2 }} className="text-center mt-5 mb-3">
            <h3 className="titreSectionColor">Upload...</h3>
            </Col>
          </Row>
        </Container>

      

      </div >
    )
  }
}

export default Aide;