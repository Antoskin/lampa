import React, {Fragment} from 'react';

function Orders({data}) {
    return (
        <Fragment>
            {data.map(order => (
                <div key={order._id} className="d-block mb-3">{order._id}</div>
            ))}
        </Fragment>
    );
}

export default Orders;