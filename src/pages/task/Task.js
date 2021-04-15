import React, { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { getTask } from '../../store/actions/task/getTask'
import { getTasks } from '../../store/actions/task/getTasks'
import { subscribeTask, unsubscribeTask } from '../../store/actions/ws/task'

import Loader from 'react-loader-spinner'
import Task from '../../components/molecules/contest/Task'
import Input from '../../components/atoms/input/Input'

import TextLink from '../../components/atoms/text/Link'
import Form from '../../components/molecules/forms/Form'
import '../../styles/pages/task/task.css'

const TaskPage = () => {
    const [request, setRequest] = useState('')
    const { taskId } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTasks())
    }, [])
    useEffect(() => {
        dispatch(getTask(taskId))
    }, [taskId])
    useEffect(() => {
        dispatch(subscribeTask(taskId))
        return () => {
            unsubscribeTask(taskId)
        }
    }, [taskId])
    const { data } = useSelector(store => store.task.tasks)
    const task = useSelector(store => store.task[taskId])
    return (
        <div className={'task-root'}>
            <Form
                className={'task__menu'}
                onChange={(e) => {
                    setRequest(e.target.value)
                }}
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                <TextLink to={'/task'}> ← Все задачи </TextLink>
                <Input type={'text'} placeholder={'Поиск'} value={request}/>
                <section className={'task__menu__tasks'}>
                    {
                        data.length
                            ? data.filter(task => task.name.toLowerCase().includes(request.toLowerCase())).map((task, index) => {
                                return <Link key={index} to={`/task/${task._id}`} className={'task__menu__tasks__task'}>
                                    <h1> { task.name } </h1>
                                </Link>
                            })
                            : <Loader
                                type="ThreeDots"
                                color="rgb(90, 120, 170)"
                                height={50}
                                width={50}
                                timeout={3000}
                                style={{ alignSelf: 'center', justifySelf: 'center' }}
                            />
                    }
                </section>
            </Form>
            <div className={'task__wrapper'}>
                {
                    task && !task.isLoading
                        ? <Task {...task} />
                        : <Loader
                            type="ThreeDots"
                            color="rgb(90, 120, 170)"
                            height={50}
                            width={50}
                            timeout={3000}
                            style={{ alignSelf: 'center', justifySelf: 'center' }}
                        />
                }
            </div>
        </div>
    )
}
export default TaskPage
