import { createAction } from '@reduxjs/toolkit';

type CounterState = { counter: number };
type CounterAction =
  | { type: 'INCREMENT' | 'DECREMENT'; payload: number }
  | { type: 'RESET' };

const increment = createAction('INCREMENT', (amount: number) => {
  return {
    payload: amount,
  };
});

const incrementAction = increment(3);

export const reducer = (state: CounterState, action: CounterAction) => {
  if (action.type === 'INCREMENT') {
    return { count: state.counter + action.payload };
  }
  if (action.type === 'DECREMENT') {
    return { count: state.counter - action.payload };
  }
  if (action.type === 'RESET') {
    return { count: 0 };
  }
  return state;
};
