import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Spinner} from 'react-bootstrap';
import Bucket from './Bucket';
import {fetchBucket, removeProduct} from '../../redux/reducer/bucket.reducer';

function BucketContainer({totalAmount, loading, data, fetchBucket, removeProduct}) {

    useEffect(() => {
        fetchBucket()
    }, [fetchBucket])

    return (
        <Bucket
            data={data}
            loading={loading}
            totalAmount={totalAmount}
            removeProduct={removeProduct}
        />
    );
}

export default connect(
    ({bucket: {data, loading, totalAmount}}) => ({data, loading, totalAmount}),
    {fetchBucket, removeProduct}
)(BucketContainer);