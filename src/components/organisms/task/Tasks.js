import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTasks } from '../../../store/actions/task/getTasks'

import TextLink from '../../atoms/text/Link'

import Input from '../../atoms/input/Input'
import Form from '../../molecules/forms/Form'
import '../../../styles/organisms/task/tasks.css'

const Tasks = () => {
    const [request, setRequest] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTasks())
    }, [])
    useEffect(() => {
        dispatch(getTasks())
    }, [])
    const { data } = useSelector(state => state.task.tasks)
    return (
        <Form
            className={'tasks'}
            onChange={(e) => {
                setRequest(e.target.value)
            }}
            onSubmit={(e) => {
                e.preventDefault()
            }}
        >
            <section className={'tasks__header'}>
                <TextLink to={'/'}> ← Главная </TextLink>
                <h1> Задачи </h1>
            </section>
            <Input type={'text'} placeholder={'Поиск'} style={{ margin: '10px 0' }} value={request}/>
            <section className={'tasks__content'}>
                {
                    data.filter(task => task.name.toLowerCase().includes(request.toLowerCase())).map((task, index) => {
                        return <Link key={index} to={`/task/${task._id}`} className={'tasks__task'}>
                            <h1> { task.name } </h1>
                        </Link>
                    })
                }
            </section>
        </Form>
    )
}
export default Tasks
