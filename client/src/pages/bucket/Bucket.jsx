import React from 'react';
import {Spinner} from 'react-bootstrap';
import BucketItem from '../../components/bucketItem';
import Form from '../../components/form';

const Bucket = ({data: {data, loading, totalAmount}}) => (
    <div className="row">
        <div className="col-8">
            {!loading ? data.map(item => (
                    <BucketItem key={item._id} item={item}/>)) :
                <Spinner animation='grow'/>}
        </div>
        <Form/>
        <div className="col-12">
            Total price:
            <span className="text-success font-weight-bold ml-2">
                    {totalAmount} $
                </span>
        </div>
    </div>
);

export default Bucket;