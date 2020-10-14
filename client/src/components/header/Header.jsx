import React, {Fragment} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Navbar, Nav, Button, Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {BsBucketFill} from 'react-icons/bs'

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
                        <Button variant="success" onClick={() => !!totalAmount && history.push('/bucket')}>
                            <BsBucketFill />
                            <Badge variant="light" className="ml-3">
                                {!!totalAmount && `${totalAmount} $`}
                            </Badge>
                        </Button>
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