export {default as history} from './history';

export const getTotal = (data) => {
    return data.reduce((acc, cur) => acc + (cur.amount * cur.count), 0)
}