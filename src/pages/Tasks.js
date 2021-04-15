import React from 'react'

import Tasks from '../components/organisms/task/Tasks'

import '../styles/pages/tasks.css'

const TasksPage = () => {
    return (
        <div className={'tasks-root'}>
            <Tasks/>
        </div>
    )
}
export default TasksPage
