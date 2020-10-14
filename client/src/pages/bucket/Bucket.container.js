import React, {useEffect} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Bucket from './Bucket';
import {fetchBucketList, removeFromBucket} from '../../redux/reducer/bucket.reducer';

function BucketContainer(props) {
    const {
        bucket, orders, fetchBucketList,
        removeFromBucket, history
    } = props

    useEffect(() => {
        fetchBucketList()
    }, [fetchBucketList])

    if (!bucket.data.length && bucket.loaded) {
        return <Alert variant='secondary'>empty bucket</Alert>
    }

    const toOrders = () => () => {
        removeFromBucket({id: null, type: 'all'});
        return history.push('/orders');
    }

    if (!!orders.success) {
        return (
            <Alert variant='success' onClick={toOrders}>
                order was created successfully
            </Alert>
        )
    }

    return <Bucket data={bucket} />
}

export default compose(withRouter,
    connect(
        ({bucket, orders}) => ({bucket, orders}),
        {fetchBucketList, removeFromBucket}),
)(BucketContainer);
