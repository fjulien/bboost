import React, { Component } from 'react';
import { Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap';
import classnames from 'classnames';
import { Link } from "react-router-dom";

import './NavBar.css'

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <div className='NavBar'>
            <Container>
                <Row>
                    <Col xs='1'><img className='logo' src='http://www.epidemium.cc/images/LogoEpidemiumV2.png' alt='logo' /></Col>
                    <Col xs='1' className='text_logo'>Epidemium</Col>
                </Row>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            <Link to='/'>Data</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            <Link to='/aide'>Aide</Link>
                     </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            <Link to='/ajout'>Ajout</Link>
                     </NavLink>
                    </NavItem>
                </Nav>
                </Container>
            </div>
        );
    }
}

export default NavBar;