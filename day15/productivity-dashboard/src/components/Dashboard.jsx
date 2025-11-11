import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, removeTask } from '../store/tasksSlice'

export default function Dashboard(){
  const tasks = useSelector(state => state.tasks.items)
  const dispatch = useDispatch()

  const add = () => {
    const id = Date.now()
    dispatch(addTask({ id, title: 'New Task ' + id }))
    localStorage.setItem('lastTasks', JSON.stringify(tasks.concat([{id, title: 'New Task ' + id}])))
  }

  return (
    <section className="dashboard">
      <h2>Your Tasks</h2>
      <button onClick={add}>Add Task</button>
      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            {t.title}
            <button onClick={() => dispatch(removeTask(t.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  )
}
