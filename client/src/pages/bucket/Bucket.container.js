import React from 'react';
import {connect} from 'react-redux';
import Bucket from './Bucket';

function BucketContainer({bucket}) {
    return (
        <Bucket data={bucket} />
    );
}

export default connect(
    ({bucket}) => ({bucket})
)(BucketContainer);