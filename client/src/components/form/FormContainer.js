import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import Form from './Form';
import {setOrder} from '../../redux/reducer/orders.reducer';

const FormContainer = ({setOrder, bucket: {data}, ...args}) => {

    const submit = val => {
        const orderIds = data.map(order => ({productId: order._id}));

        const newOrder = {
            ...val,
            orders: orderIds
        }
        
        console.log('newOrder', newOrder);

        //setOrder(JSON.stringify(newOrder));
    }

    return (
        <Form onSubmit={submit}
            {...args} />
    )
}

export default compose(
    reduxForm({
        form: 'order',
    }),
    connect(({bucket}) => ({bucket}), {setOrder})
)(FormContainer);
