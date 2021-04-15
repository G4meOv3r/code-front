import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useDispatch, useSelector } from 'react-redux'
import { sendPackage } from '../../../store/actions/package/sendPackage'

import Loader from 'react-loader-spinner'

import TextLink from '../../atoms/text/Link'
import { UnControlled } from 'react-codemirror2'
import 'codemirror/mode/python/python'
import Input from '../../atoms/input/Input'
import Form from '../forms/Form'

import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/lib/codemirror.css'
import '../../../styles/molecules/contest/task.css'

const Task = ({ _id, name, task, packages }) => {
    const [code, setCode] = useState('')
    const [file, setFile] = useState('')
    const dispatch = useDispatch()
    const isAuthorized = useSelector(state => state.auth.isAuthorized)
    return (
        <Form
            key={_id}
            className={'task'}
            onChange={(e) => {
                const newFile = e.target.files[0]
                if (newFile) {
                    const reader = new FileReader()
                    reader.readAsText(e.target.files[0])
                    reader.onload = () => {
                        setFile(reader.result)
                    }
                }
            }}
            onSubmit={(e) => {
                e.preventDefault()
                dispatch(sendPackage(
                    _id,
                    'Python 3.9',
                    file || code
                ))
            }}
        >
            <div className={'task__text'}>
                <h1> { name } </h1>
                {
                    task.map((part, index) => {
                        return <section key={index}>
                            <h2> { part.title } </h2>
                            <p> { part.text } </p>
                        </section>
                    })
                }
            </div>
            <UnControlled
                value={code}
                options={{
                    mode: 'python',
                    theme: 'material',
                    lineNumbers: true,
                    indentUnit: 4
                }}
                onChange={(editor, data, value) => {
                    setCode(value)
                }}
            />
            {
                isAuthorized
                    ? <div className={'task__upload'}>
                        {
                            file
                                ? <p> Будет отправленно решение из прекрепленного файла. <i> <u> Хотите отправить код из редактора? Открепите файл! </u> </i > </p>
                                : <p> Будет отправленно решение из встроенного редактора. <i> <u> Хотите отправить файл? Прикрепите его! </u> </i > </p>
                        }
                        <input type={'file'} accept={'.py'}/>
                        <Input type={'submit'} value={'Отправить'} />
                    </div>
                    : <p style={{ textAlign: 'center', fontSize: '15px' }}>
                        <TextLink to={'/auth/signin'} style={{ display: 'inline' }}>Войдите</TextLink> или <TextLink to={'/auth/signup'} style={{ display: 'inline' }}>зарегистрируйтесь</TextLink>, чтобы отправлять решения задач
                    </p>
            }
            {
                packages && packages.length
                    ? <table className={'task__packages'} cellSpacing='0' cellPadding='0'>
                        <tr style={{ boxShadow: 'none', height: '40px', background: '0' }}>
                            <th> id </th>
                            <th> Дата </th>
                            <th> Компилятор </th>
                            <th> Результат </th>
                            <th> Протокол </th>
                        </tr>
                        {
                            packages.map((p, index) => {
                                const { _id, date, compiler, score } = p
                                const parsedDate = new Date(date)
                                const dateParams = [parsedDate.getDay(), parsedDate.getMonth(), parsedDate.getFullYear(), parsedDate.getHours(), parsedDate.getMinutes(), parsedDate.getSeconds()]
                                    .map(value => value < 10 ? `0${value}` : `${value}`)
                                const stringDate = `${dateParams[0]}-${dateParams[1]}-${dateParams[2]} ${dateParams[3]}:${dateParams[4]}:${dateParams[5]}`
                                return (
                                    <tr key={index}>
                                        <td> {_id} </td>
                                        <td> {stringDate} </td>
                                        <td> {compiler} </td>
                                        <td> {
                                            score || <Loader
                                                type="Oval"
                                                color="rgb(90, 120, 170)"
                                                height={15}
                                                width={15}
                                                style={{ alignSelf: 'center', justifySelf: 'center' }}
                                            />
                                        } </td>
                                        <td> <TextLink to={`/package/${_id}`}> Подробнее </TextLink> </td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                    : false
            }
        </Form>
    )
}
Task.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    task: PropTypes.array,
    packages: PropTypes.array
}
export default Task
