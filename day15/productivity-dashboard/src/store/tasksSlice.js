import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: JSON.parse(localStorage.getItem('tasks') || '[]')
}

const slice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action){
      state.items.push(action.payload)
      localStorage.setItem('tasks', JSON.stringify(state.items))
    },
    removeTask(state, action){
      state.items = state.items.filter(t => t.id !== action.payload)
      localStorage.setItem('tasks', JSON.stringify(state.items))
    }
  }
})

export const { addTask, removeTask } = slice.actions
export default slice.reducer
