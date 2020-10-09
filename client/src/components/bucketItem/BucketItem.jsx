import React from 'react';
import {Button} from 'react-bootstrap';
import s from './BucketItem.module.scss';

function BucketItem({item: {thumbnail, title, description, amount}}) {
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
                        <Button variant="danger" >DEC</Button>
                        <span className="ml-2 mr-2">1</span>
                        <Button variant="success">1NC</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BucketItem;