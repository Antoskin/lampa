import React, {Fragment} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Navbar, Nav, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Header({history, totalAmount}) {
    return (
        <Navbar bg="dark" expand="lg" className="mb-5">
            <Navbar.Brand href="#home">Lamp</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to='/'>Main</Link>
                </Nav>
                {history.location.pathname.includes('/bucket') || (
                    <Fragment>
                        <span className="mr-5 text-success">
                            {totalAmount >= 1 && totalAmount}
                        </span>
                        <Button onClick={() => history.push('/bucket')}>bucket</Button>
                    </Fragment>

                )}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default compose(
    withRouter,
    connect(({bucket: {totalAmount}}) => ({totalAmount}))
)(Header);