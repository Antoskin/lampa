import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import Form from './Form';
import {validate} from '../../utils';
import {setOrder} from '../../redux/reducer/orders.reducer';

const FormContainer = ({setOrder, bucket: {data}, ...args}) => {

    const submit = contactFields => {
        const products = data.map(order => ({productId: order._id, count: order.count}));

        const newOrder = {
            ...contactFields,
            orders: products
        }

        setOrder(JSON.stringify(newOrder));
    }
    
    return (
        <Form onSubmit={submit}
            {...args} />
    )
}

export default compose(
    reduxForm({
        form: 'order',
        validate
    }),
    connect(({bucket}) => ({bucket}), {setOrder})
)(FormContainer);
