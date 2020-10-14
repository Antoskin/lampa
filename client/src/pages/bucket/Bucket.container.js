import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Bucket from './Bucket';
import {fetchBucketList, removeFromBucket} from '../../redux/reducer/bucket.reducer';

function BucketContainer({totalAmount, loading, data, fetchBucketList, removeFromBucket}) {

    useEffect(() => {
        fetchBucketList()
    }, [fetchBucketList])

    return (
        <Bucket
            data={data}
            loading={loading}
            totalAmount={totalAmount}
            removeFromBucket={removeFromBucket}
        />
    );
}

export default connect(
    ({bucket: {data, loading, totalAmount}}) => ({data, loading, totalAmount}),
    {fetchBucketList, removeFromBucket}
)(BucketContainer);