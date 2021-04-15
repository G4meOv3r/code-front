import React, { useEffect } from 'react'

import Loader from 'react-loader-spinner'

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPackage } from '../store/actions/package/getPackage'
import { subscribePackage, unsubscribePackage } from '../store/actions/ws/package'

import { UnControlled } from 'react-codemirror2'
import TextLink from '../components/atoms/text/Link'

import '../styles/pages/package.css'

const PackagePage = () => {
    const { packageId } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPackage(packageId))
    }, [])
    useEffect(() => {
        dispatch(subscribePackage(packageId))
        return () => {
            dispatch(unsubscribePackage(packageId))
        }
    }, [])
    const pkg = useSelector(store => store.package[packageId] || { isLoading: true })
    return (
        <div className={'package-root'}>
            {
                pkg.isLoading
                    ? <Loader
                        type="ThreeDots"
                        color="rgb(90, 120, 170)"
                        height={50}
                        width={50}
                        timeout={3000}
                        style={{ alignSelf: 'center', justifySelf: 'center' }}
                    />
                    : <div className={'package'}>
                        <section className={'package__header'}>
                            <TextLink to={`/task/${pkg.package.task}`}> ← К задаче </TextLink>
                            <h1> ПОСЫЛКА: {pkg.package._id} </h1>
                        </section>
                        <section className={'package__content'}>
                            <div className={'package__details'}>
                                <div> <b>РЕЗУЛЬТАТ:</b> {pkg.package.score} </div>
                                <div> <b>КОМПИЛЯТОР:</b> {pkg.package.compiler} </div>
                                <table className={'package__details__tests'}>
                                    {
                                        pkg.package.tests.map((test, index) => {
                                            const { status, time } = test
                                            return <tr key={index} className={status ? (status === 'OK' ? 'correct' : 'incorrect') : undefined}>
                                                <td> { index + 1} </td>
                                                <td> { status || '—' } </td> <td> {time || '—' } </td>
                                            </tr>
                                        })
                                    }
                                </table>
                                <div> <b>ПРОЙДЕНО:</b> { pkg.package.tests.reduce((accumulator, test) => {
                                    return accumulator + (test.status === 'OK' ? 1 : 0)
                                }, 0) } </div>
                                <div> <b>НЕ ПРОЙДЕНО:</b> { pkg.package.tests.reduce((accumulator, test) => {
                                    return accumulator + (!test.status && test.status !== 'OK' ? 1 : 0)
                                }, 0) } </div>
                                <div className={'package__details__tests__decryption'} tabIndex={0}>
                                    <div> <b>OK</b> — Тест пройден</div>
                                    <div> <b>WA (Wrong Answer)</b> — Неверный ответ</div>
                                    <div> <b>RE (RUNTIME ERROR)</b> — Ошибка во время выполнения программы</div>
                                    <div> <b>TL (TIME LIMIT)</b> — Программа завершена по ограничению времени</div>
                                    <div> <b>CE (COMPILATION ERROR)</b> — Ошибка компиляции</div>
                                </div>
                            </div>
                            <UnControlled
                                value={pkg.package.code}
                                options={{
                                    mode: 'python',
                                    theme: 'material',
                                    lineNumbers: true,
                                    indentUnit: 4,
                                    readOnly: true
                                }}
                            />
                        </section>
                    </div>
            }
        </div>
    )
}
export default PackagePage
