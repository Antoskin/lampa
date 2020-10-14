import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import Bucket from './Bucket';
import {fetchBucketList, removeFromBucket} from '../../redux/reducer/bucket.reducer';

function BucketContainer({bucket, fetchBucketList, removeFromBucket}) {

    useEffect(() => {
        fetchBucketList()
    }, [fetchBucketList])


    if (!bucket.data.length && bucket.loaded) {
        return <Alert variant='secondary'>empty bucket</Alert>
    }

    return (
        <Bucket data={bucket} removeFromBucket={removeFromBucket} />
    );
}

export default connect(
    ({bucket}) => ({bucket}),
    {fetchBucketList, removeFromBucket}
)(BucketContainer);