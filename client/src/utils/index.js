export {default as history} from './history';

export const getTotal = (data) => {
    return data.reduce((acc, cur) => acc + (cur.amount * cur.count), 0)
}

export const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Required'
    } else if (values.name.length < 3) {
        errors.name = 'Minimum be 3 characters or more'
    }
    if (!values.surname) {
        errors.surname = 'Required'
    } else if (values.surname.length < 3) {
        errors.surname = 'Minimum be 3 characters or more'
    }
    if (!values.address) {
        errors.address = 'Required'
    } else if (values.address.length < 10) {
        errors.address = 'Minimum be 10 characters or more'
    }
    if (!values.phone) {
        errors.phone = 'Required'
    } else if (values.phone.length < 3) {
        errors.phone = 'Minimum be 3 characters or more'
    }
    return errors
}