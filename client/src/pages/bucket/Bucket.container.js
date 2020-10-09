import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Spinner} from 'react-bootstrap';
import Bucket from './Bucket';
import {fetchProducts} from '../../redux/reducer/bucket.reducer';

function BucketContainer({ids, totalAmount, loading, data, fetchProducts}) {

    useEffect(() => {
        fetchProducts(ids)
    }, [ids, fetchProducts])

    if (loading) {
        return <Spinner animation='grow' />
    }

    return (
        <Bucket
            data={data}
            totalAmount={totalAmount}
        />
    );
}

export default connect(
    ({bucket: {ids, data, loading, totalAmount}}) => ({ids, data, loading, totalAmount}), {fetchProducts}
)(BucketContainer);