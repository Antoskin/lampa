import React from 'react';
import {Field} from 'redux-form';
import {Button} from 'react-bootstrap';

function Form({onSubmit, handleSubmit}) {

    const renderField = ({ input, type, placeholder, meta: { touched, error } }) => (
        <div className="field-input">
            <label className="d-block">{placeholder}</label>
            <input {...input} type={type} className="form-control mb-2" />
            {touched && ((error && <span className="text-danger">{error}</span>))}
        </div>
    )

    return (
        <form className="col-4" onSubmit={handleSubmit(onSubmit)}>
            <Field
                name="name"
                component={renderField}
                type="text"
                placeholder="Name"
            />
            <Field
                name="surname"
                component={renderField}
                type="text"
                placeholder="Surname"
            />
            <Field
                name="address"
                component={renderField}
                type="text"
                placeholder="Address"
            />
            <Field
                name="phone"
                component={renderField}
                type="number"
                placeholder="Phone"
            />
            <Button type="submit" label="submit">Make order</Button>
        </form>
    );
}

export default Form