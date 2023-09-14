import { createAction, createReducer } from '@reduxjs/toolkit';
type CounterState = { counter: number };

const increment = createAction('INCREMENT', (amount: number) => {
  return { payload: amount };
});
const decrement = createAction('DECREMENT', (amount: number) => {
  return { payload: amount };
});

const reset = createAction('RESET');

type CounterAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>;

const counterReducer = createReducer({ count: 0 }, (builder) => {});

export const reducer = (state: CounterState, action: CounterAction) => {
  if (action.type === increment.type) {
    return { count: state.counter + action.payload };
  }
  if (action.type === decrement.type) {
    return { count: state.counter - action.payload };
  }
  if (action.type === reset.type) {
    return { count: 0 };
  }
  return state;
};
