import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Spinner, Alert} from 'react-bootstrap';
import Main from './Main';
import {fetchProducts} from '../../redux/reducer/product.reducer';

function MainContainer({products: {data, loading, error}, fetchProducts}) {

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    if (loading) {
        return <Spinner animation='grow' />
    }

    if (error) {
        return <Alert variant='danger'>{error}</Alert>
    }

    return (
        <Main data={data} />
    );
}

export default connect(
    ({products}) => ({products}), {fetchProducts}
)(MainContainer);