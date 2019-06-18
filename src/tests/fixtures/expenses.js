import moment from 'moment';

export default [
    {
        id: 1,
        description: 'house',
        amount: 10,
        note: '',
        createdAt: 0
    },
    {
        id: 2,
        description: 'car',
        amount: 20,
        note: '',
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: 3,
        description: 'cat',
        amount: 30,
        note: '',
        createdAt: moment(0).add(4, 'days').valueOf()
    }];
    