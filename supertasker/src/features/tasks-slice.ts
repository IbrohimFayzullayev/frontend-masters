import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TaskState = {
  entities: Task[];
};

const initialState: TaskState = {
  entities: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.entities.push(action.payload);
    },
    removeTask: (state) => state,
  },
});
