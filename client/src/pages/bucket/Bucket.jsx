import React from 'react';
import BucketItem from '../../components/bucketItem';

function Bucket({data, totalAmount, removeProduct}) {
    return (
        <div className="row">
            <div className="col-7">
                {data.map(item => (
                    <BucketItem key={item._id} item={item} removeProduct={removeProduct} />
                ))}
            </div>
            <div className="col-3">
                das
            </div>
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