import React from 'react';
import {FaMinus, FaPlus, FaTimes} from 'react-icons/fa';
import {Button} from 'react-bootstrap';
import s from './BucketItem.module.scss';

function BucketItem({item: {thumbnail, title, description, amount, count, _id}, removeProduct}) {
    return (
        <div className="row shadow mb-4 p-2">
            <div className="col-2">
                <img src={thumbnail} alt="" width="100%" />
            </div>
            <div className="col-10">
                <div className="row">
                    <div className="col-8">
                        <div className="mb-2">{title}</div>
                        <div className={`${s.description} mb-2`}>
                            {description}
                        </div>
                        <div>Price: {amount}$</div>
                    </div>
                    <div className="col-4 d-flex align-items-center justify-content-end">
                        <Button variant="danger" >
                            <FaMinus />
                        </Button>
                        <span className="ml-2 mr-2">{count}</span>
                        <Button variant="success">
                            <FaPlus />
                        </Button>
                        <FaTimes
                            className="position-absolute"
                            style={{top: 0, right: 0, cursor: 'pointer'}}
                            onClick={() => removeProduct(_id)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BucketItem;