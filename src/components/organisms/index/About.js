import React from 'react'
import TextLink from '../../atoms/text/Link'

import '../../../styles/organisms/index/about.css'

const About = () => {
    return (
        <div className={'about'}>
            <div className={'about__header'}>
                <h1> CODE CHALLENGE </h1>
                <h2> — веб-сервис для соревновательного решения задач по программированию </h2>
            </div>
            <div className={'about__road'}>
                <div className={'about__road__stage about__road__stage__hidden'}>
                    <h1> 0. БЕЗ АВТОРИЗАЦИИ </h1>
                    <p>
                        Просмотр общей информации о контестах, пользователях доступен без регистрации или входа. <br/>
                        <b> <i> Начните прямо сейчас! </i> </b>
                        <TextLink to={'/contests'} style={{ display: 'inline' }}> контесты </TextLink>
                        <TextLink to={'/profiles'} style={{ display: 'inline' }}> пользователи </TextLink>
                    </p>
                </div>
                <div className={'about__road__stage'}>
                    <h1> <span>1.</span> РЕГИСТРАЦИЯ И ВХОД </h1>
                    <p>
                        Для получения возможности создавать, искать и участвовать в контестах необходимо пройти форму
                        <TextLink to={'/auth/signup'} style={{ display: 'inline' }}>регистрации</TextLink>
                        или
                        <TextLink to={'/auth/signin'} style={{ display: 'inline' }}>входа</TextLink>.
                    </p>
                </div>
                <div className={'about__road__stage'}>
                    <h1> 2. НАСТРОЙКА ПРОФИЛЯ </h1>
                    <p>
                        <i> Ваш профиль — ваше лицо на этой платформе </i>, не забудте <u>украсить</u> его! Измените аватар и имя на странице <TextLink to={'/profile'} style={{ display: 'inline' }}>профиля</TextLink>.
                    </p>
                </div>
                <div className={'about__road__stage'}>
                    <h1> 3. ПОИСК ИЛИ СОЗДАНИЕ КОНТЕСТА </h1>
                    <p>
                        После регистрации или входа на странице
                        <TextLink to={'/contests'} style={{ display: 'inline' }}>контестов</TextLink>
                        появятся интерактивные объекты предлагающие создать или найти контест.
                    </p>
                </div>
                <div className={'about__road__stage'}>
                    <h1> 4. УЧАТИЕ В КОНТЕСТАХ </h1>
                    <p>
                        Когда контест будет начат вам будет предложен набор задач, решения которых необходимо отправить в соответсвующую форму для установки в очередь автоматической системы оценивания. <br/>
                    </p>
                    <p>
                        Если вы хотите решать задачи без привязки ко времени или сопернику посетите <TextLink to={'/contests'} style={{ display: 'inline' }}>страницу со всеми задачами</TextLink>.
                    </p>
                </div>
                <div className={'about__road__stage'}>
                    <h1> 5. УДАЧИ! </h1>
                    <p>
                        Остальная информация будет предоставляется профильными страницами, не бойтесь, вы не заблудитесь!
                    </p>
                </div>
            </div>
            <div className={'about__footer'}>
                <p> Приложение находится в активной разработке. <br/> Если вы <u> нашли баг</u> или хотите <u>посмотреть исходный код</u>, то можете обратиться к <a rel="noreferrer" style={{ display: 'inline' }} className={'text-link'} href={'https://github.com/G4meOv3r/code-front'} target="_blank"> гит-хаб проекту </a> </p>
            </div>
        </div>
    )
}
export default About
