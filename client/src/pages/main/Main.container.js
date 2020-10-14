import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Spinner, Alert} from 'react-bootstrap';
import Main from './Main';
import {fetchProducts} from '../../redux/reducer/product.reducer';

function MainContainer({data, loading, error, loaded, fetchProducts}) {

    useEffect(() => {
        !loaded && fetchProducts()
    }, [loaded, fetchProducts])

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
    ({products: {
        data,
        loading,
        error,
        loaded
    }}) => ({data, loading, error, loaded}),
    {fetchProducts}
)(MainContainer);