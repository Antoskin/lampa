import React from 'react';
import {Spinner} from 'react-bootstrap';
import BucketItem from '../../components/bucketItem';
import Form from '../../components/form';

function Bucket({data: {data, loading, totalAmount}, removeFromBucket}) {
    return (
        <div className="row">
            <div className="col-8">
                {loading ? <Spinner animation='grow' />  :
                    data.map(item => (
                        <BucketItem
                            key={item._id}
                            item={item}
                            removeFromBucket={removeFromBucket}
                        />
                ))}
            </div>
            <Form />
            <div className="col-12">
                Total price:
                <span className="text-success font-weight-bold ml-2">
                    {totalAmount}
                </span>
            </div>
        </div>
    );
}

export default Bucket;