import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[2].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1]]);

});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const action = {
        expense: {
            id: 4,
            description: 'room',
            amount: 100,
            note: '',
            createdAt: 110
        },
        type: 'ADD_EXPENSE'
    };
    
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        updates: {
            description: 'car new'
        },
        id: 2
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe('car new');
});

test('should not edit expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        updates: {
            description: 'car new'
        },
        id: 10
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});