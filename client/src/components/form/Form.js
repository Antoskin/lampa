import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Button} from 'react-bootstrap';

function Form({handleSubmit}) {

    const submit = val => {
        console.log('val', val);
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Field
                name="name"
                component="input"
                type="text"
                placeholder="Name"
                className="form-control mb-2"
            />
            <Field
                name="surname"
                component="input"
                type="text"
                placeholder="Surname"
                className="form-control mb-2"
            />
            <Field
                name="address"
                component="input"
                type="text"
                placeholder="Address"
                className="form-control mb-2"
            />
            <Field
                name="phone"
                component="input"
                type="number"
                placeholder="Phone"
                className="form-control mb-3"
            />
            <Button type="submit" label="submit">Make order</Button>
        </form>
    );
}

export default reduxForm({
    form: 'order',
})(Form);