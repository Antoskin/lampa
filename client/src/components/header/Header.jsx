import React from 'react';
import {withRouter} from 'react-router-dom';
import {Navbar, Nav, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Header({history}) {
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home">Lamp</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to='/'>Main</Link>
                </Nav>
                <Button onClick={() => history.push('/card')}>card</Button>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default withRouter(Header);