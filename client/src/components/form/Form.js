import React from 'react';
import {Field} from 'redux-form';
import {Button} from 'react-bootstrap';

function Form({onSubmit, handleSubmit}) {

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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

export default Form