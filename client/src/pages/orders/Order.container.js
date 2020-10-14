import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Orders from './Orders';
import {fetchOrders} from '../../redux/reducer/orders.reducer';

function OrderContainer({data, loading, error, fetchOrders}) {

    useEffect(() => {
        fetchOrders();
    }, [fetchOrders])

    if (loading) {
        return 'loading...';
    }

    if (error) {
        return `warning ${error}`;
    }

    return (
        <Orders data={data} />
    );
}

export default connect(
    ({orders: {data, loading, error}}) => ({data, loading, error}),
    {fetchOrders}
)(OrderContainer);