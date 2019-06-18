import moment from 'moment';
import selectedExpesnses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('should filter by text', () => {
    const filters = {
        text: 'ca',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    expect(selectedExpesnses(expenses, filters)).toEqual([
        expenses[2],
        expenses[1]
    ]);
});

test('should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };

    expect(selectedExpesnses(expenses, filters)).toEqual([expenses[2], expenses[0]]);
});

test('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };

    expect(selectedExpesnses(expenses, filters)).toEqual([expenses[0], expenses[1]]);
});

test('should filter by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };

    expect(selectedExpesnses(expenses, filters)).toEqual([expenses[2], expenses[0]])
});

test('should filter by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined

    };

    expect(selectedExpesnses(expenses, filters)).toEqual([
        expenses[2],
        expenses[1],
        expenses[0]
    ])
});